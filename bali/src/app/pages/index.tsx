"use client";

import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Bot, Sparkles, TrendingUp } from "lucide-react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Check } from "lucide-react";
import { BarChart, Brain, Rocket, Settings, Target } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Brain className="h-8 w-8 text-blue-600" />,
    title: "AI Campaign Management",
    description:
      "Optimize your campaigns with intelligent automation and data-driven decisions.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: "Smart Content Creation",
    description:
      "Generate engaging content across platforms with AI-powered suggestions.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights and reports to measure and improve performance.",
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: "Audience Targeting",
    description:
      "Reach the right audience with AI-powered segmentation and targeting.",
  },
  {
    icon: <Settings className="h-8 w-8 text-blue-600" />,
    title: "Automation Workflows",
    description:
      "Create custom workflows to automate repetitive marketing tasks.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-blue-600" />,
    title: "Performance Optimization",
    description:
      "Continuously improve campaigns with AI-driven recommendations.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small businesses starting with digital marketing",
    features: [
      "AI Campaign Management",
      "Basic Content Generation",
      "Standard Analytics",
      "Email Support",
      "5 Team Members",
      "10k Monthly Visitors",
    ],
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Everything in Starter, plus:",
      "Advanced AI Features",
      "Custom Workflows",
      "Priority Support",
      "15 Team Members",
      "50k Monthly Visitors",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "249",
    description: "For large organizations requiring full automation",
    features: [
      "Everything in Professional, plus:",
      "Custom AI Models",
      "API Access",
      "Dedicated Support",
      "Unlimited Team Members",
      "Unlimited Monthly Visitors",
    ],
  },
];

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">MarketAI</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">
                Pricing
              </a>
              <a href="/dashboard" className="text-gray-600 hover:text-blue-600">
                Dashboard
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700">
                <Link href="/sign-in">Login</Link>
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Link href="/sign-up">Sign Up</Link>
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-gray-600">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600">
                Pricing
              </a>
              <a href="/dashboard" className="block px-3 py-2 text-gray-600">
                Dashboard
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-600">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-600">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-4 py-2 text-blue-600">Login</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Digital Marketing</span>
              <span className="block text-blue-200">
                with AI-Powered Automation
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Streamline your campaigns, create engaging content, and analyze
              performance - all with the power of AI.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg">
              <Bot className="h-12 w-12 text-blue-200" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                AI-Powered
              </h3>
              <p className="mt-2 text-blue-100 text-center">
                Advanced AI algorithms optimize your campaigns
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg">
              <Sparkles className="h-12 w-12 text-blue-200" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Smart Content
              </h3>
              <p className="mt-2 text-blue-100 text-center">
                Generate engaging content automatically
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg">
              <TrendingUp className="h-12 w-12 text-blue-200" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                Real-time Analytics
              </h3>
              <p className="mt-2 text-blue-100 text-center">
                Track and optimize performance instantly
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24 fill-current text-gray-50"
            viewBox="0 0 1440 74"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C240,70 480,70 720,40 C960,10 1200,10 1440,40 L1440,74 L0,74 Z" />
          </svg>
        </div>
      </div>

      {/* features */}

      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features for Modern Marketing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to succeed in digital marketing, powered by AI
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-white p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pricing */}

      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl ${
                  plan.popular
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : "bg-white text-gray-900 border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-4 text-sm opacity-90">{plan.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-base font-medium">/month</span>
                  </p>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check
                          className={`h-5 w-5 ${
                            plan.popular ? "text-blue-200" : "text-blue-600"
                          } mr-3`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full py-3 px-6 rounded-lg font-medium ${
                      plan.popular
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Have questions? We would love to hear from you.
            </p>
          </div>

          <div className="mt-16 max-w-lg mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      rows={4}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Your message"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">support@marketai.com</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-600">Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-400">MarketAI</h3>
              <p className="mt-4 text-gray-400">
                Transforming digital marketing with the power of AI automation.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 MarketAI. All rights reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;
