import { users, blogPosts, contactMessages, type User, type InsertUser, type BlogPost, type InsertBlogPost, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentBlogPostId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentBlogPostId = 1;
    this.currentContactMessageId = 1;
    
    // Initialize with sample blog posts
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Understanding Zero-Day Vulnerabilities",
        excerpt: "An in-depth analysis of zero-day vulnerabilities, their impact on cybersecurity, and how organizations can prepare for unknown threats.",
        content: "Zero-day vulnerabilities represent one of the most significant challenges in cybersecurity today. These security flaws exist in software but are unknown to the vendor and security community, making them particularly dangerous. In this comprehensive guide, we'll explore what zero-day vulnerabilities are, how they're discovered and exploited, and most importantly, how organizations can protect themselves against these unknown threats.",
        date: "December 15, 2024",
        tags: ["Security", "Vulnerability", "Zero-Day"],
        icon: "fas fa-shield-alt"
      },
      {
        title: "Implementing Perfect Forward Secrecy",
        excerpt: "A practical guide to implementing perfect forward secrecy in web applications to protect against future cryptographic breaches.",
        content: "Perfect Forward Secrecy (PFS) is a cryptographic property that ensures session keys will not be compromised even if long-term secret keys are compromised. This article provides a comprehensive guide to implementing PFS in modern web applications, covering both theoretical concepts and practical implementation strategies.",
        date: "December 10, 2024",
        tags: ["Cryptography", "Security", "Web Security"],
        icon: "fas fa-lock"
      },
      {
        title: "My Journey Learning Ethical Hacking",
        excerpt: "Sharing my experience learning ethical hacking, from basic concepts to advanced penetration testing techniques and certifications.",
        content: "Learning ethical hacking has been one of the most rewarding aspects of my cybersecurity journey. In this post, I'll share my experience, the resources I used, challenges I faced, and the certifications I pursued. Whether you're just starting out or looking to advance your skills, this guide will provide valuable insights into the world of ethical hacking.",
        date: "December 5, 2024",
        tags: ["Ethical Hacking", "Learning", "Career"],
        icon: "fas fa-bug"
      },
      {
        title: "Securing Cloud Infrastructure with Terraform",
        excerpt: "Best practices for securing cloud infrastructure using Infrastructure as Code principles with Terraform and automated security scanning.",
        content: "As organizations increasingly adopt cloud infrastructure, securing these environments becomes paramount. This article explores how to implement security best practices using Terraform, Infrastructure as Code (IaC) principles, and automated security scanning tools to create robust, secure cloud deployments.",
        date: "November 28, 2024",
        tags: ["Cloud Security", "DevOps", "Infrastructure"],
        icon: "fas fa-cloud"
      }
    ];

    samplePosts.forEach(post => {
      this.createBlogPost(post);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const post: BlogPost = { ...insertPost, id };
    this.blogPosts.set(id, post);
    return post;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
