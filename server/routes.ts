import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

const createEmailTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
};

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);

      const submission = await storage.createContactSubmission(validatedData);

      try {
        const transporter = createEmailTransporter();

        const mailOptions = {
          from: process.env.GMAIL_USER || "yugeshwarangm@gmail.com",
          to: "yugeshwarangm@gmail.com",
          subject: `Portfolio Contact: ${validatedData.subject}`,
          html: `
            <div>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
              <p><strong>Message:</strong> ${String(validatedData.message).replace(/\n/g, "<br>")}</p>
            </div>
          `,
          replyTo: validatedData.email
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to yugeshwarangm@gmail.com");
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }

      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data"
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  app.get("/api/contact", async (_req, res) => {
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
