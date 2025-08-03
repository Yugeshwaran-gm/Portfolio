import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

// Create nodemailer transporter using Gmail SMTP
const createEmailTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'yugeshwarangm@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASSWORD
    }
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store in database
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      try {
        const transporter = createEmailTransporter();
        
        const mailOptions = {
          from: process.env.GMAIL_USER || 'yugeshwarangm@gmail.com',
          to: 'yugeshwarangm@gmail.com',
          subject: `Portfolio Contact: ${validatedData.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2C3E50; border-bottom: 2px solid #3498DB; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Subject:</strong> ${validatedData.subject}</p>
              </div>
              
              <div style="margin: 20px 0;">
                <h3 style="color: #2C3E50;">Message:</h3>
                <div style="background-color: white; padding: 15px; border-left: 4px solid #3498DB; border-radius: 4px;">
                  ${validatedData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
                <p>This message was sent from your portfolio website contact form.</p>
                <p>You can reply directly to this email to respond to ${validatedData.name}.</p>
              </div>
            </div>
          `,
          replyTo: validatedData.email
        };
        
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to yugeshwarangm@gmail.com');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the request if email fails, but log it
      }
      
      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
