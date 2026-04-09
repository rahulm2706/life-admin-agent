# LIFE ADMIN AGENT: AN AI-POWERED PERSONAL TASK AND SUBSCRIPTION MANAGEMENT SYSTEM USING REACT AGENT ARCHITECTURE

## A PROJECT REPORT

Submitted by

**Rahul Malik**
*(Register No: — )*

in partial fulfillment for the award of the degree of

**BACHELOR OF TECHNOLOGY**
in
**COMPUTER SCIENCE AND ENGINEERING**
*(ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING)*

---

**SCHOOL OF COMPUTING SCIENCE ENGINEERING AND ARTIFICIAL INTELLIGENCE**
**VIT BHOPAL UNIVERSITY**
KOTHRIKALAN, SEHORE
MADHYA PRADESH – 466114

**APRIL 2026**

---

---

# BONAFIDE CERTIFICATE

VIT BHOPAL UNIVERSITY, KOTHRIKALAN, SEHORE
MADHYA PRADESH – 466114

**BONAFIDE CERTIFICATE**

Certified that this project report titled **"Life Admin Agent: An AI-Powered Personal Task and Subscription Management System using ReAct Agent Architecture"** is the bonafide work of **Rahul Malik (Register No: —)** who carried out the project work under my supervision. Certified further that to the best of my knowledge the work reported at this time does not form part of any other project/research work based on which a degree or award was conferred on an earlier occasion on this or any other candidate.

| | |
|---|---|
| **PROGRAM CHAIR** | **PROJECT GUIDE** |
| Dr. Siddharth Singh Chouhan | \<Name\>, \<Designation\> |
| School of Computing Science Engineering | School of Computing Science Engineering |
| and Artificial Intelligence | and Artificial Intelligence |
| VIT BHOPAL UNIVERSITY | VIT BHOPAL UNIVERSITY |

The Project Exhibition / Examination is held on _______________

---

# ACKNOWLEDGEMENT

First and foremost, I would like to thank the Lord Almighty for His presence and immense blessings throughout the project work.

I wish to express my heartfelt gratitude to Dr. Siddharth Singh Chouhan, Program Chair, School of Computing Science Engineering and Artificial Intelligence, VIT Bhopal University, for his valuable support and encouragement in carrying out this work.

I would like to thank my internal guide for continually guiding and actively participating in this project, providing valuable suggestions that helped shape the design of the Life Admin Agent system—particularly in the areas of agentic AI, vector memory, and real-time communication.

I would like to thank all the technical and teaching staff of the School of Computing Science Engineering and Artificial Intelligence, VIT Bhopal University, who extended directly or indirectly all necessary support.

Special thanks are also due to Anthropic for providing access to the Claude Sonnet API, and to the open-source communities behind FastAPI, ChromaDB, React, and LangChain concepts that inspired the ReAct pattern implemented in this project.

Last, but not least, I am deeply indebted to my parents who have been my greatest support while I worked day and night for the project to make it a success.

---

# LIST OF ABBREVIATIONS

| Abbreviation | Full Form |
|---|---|
| AI | Artificial Intelligence |
| ML | Machine Learning |
| LLM | Large Language Model |
| ReAct | Reason + Act (Agent Framework) |
| API | Application Programming Interface |
| REST | Representational State Transfer |
| SSE | Server-Sent Events |
| NLP | Natural Language Processing |
| UI | User Interface |
| UX | User Experience |
| DB | Database |
| SQL | Structured Query Language |
| SQLite | Self-Contained SQL Database Engine |
| ORM | Object Relational Mapping |
| CORS | Cross-Origin Resource Sharing |
| OAuth | Open Authorization |
| JWT | JSON Web Token |
| JSON | JavaScript Object Notation |
| CRUD | Create, Read, Update, Delete |
| HTTP | HyperText Transfer Protocol |
| HTTPS | HyperText Transfer Protocol Secure |
| SPA | Single Page Application |
| P1/P2/P3 | Priority Levels 1, 2, and 3 |
| INR / ₹ | Indian National Rupee |
| IST | Indian Standard Time |
| ChromaDB | Chroma Vector Database |
| FastAPI | Fast Application Programming Interface (Python framework) |
| Vite | Next-generation frontend build tool |
| JSX | JavaScript XML (React syntax extension) |
| CSS | Cascading Style Sheets |
| SMTP | Simple Mail Transfer Protocol |
| IMAP | Internet Message Access Protocol |
| DDG | DuckDuckGo |
| ENV | Environment Variable |
| SDK | Software Development Kit |
| CI/CD | Continuous Integration / Continuous Deployment |
| MVP | Minimum Viable Product |
| GDPR | General Data Protection Regulation |

---

# LIST OF FIGURES AND GRAPHS

| Figure No. | Title | Page |
|---|---|---|
| Fig 1.1 | Life Admin Agent — System Overview Architecture | Ch-1 |
| Fig 2.1 | Comparison of Chat-only vs Agent-based Approaches | Ch-2 |
| Fig 2.2 | Standard LLM vs ReAct Agent Information Flow | Ch-2 |
| Fig 3.1 | Use Case Diagram — Life Admin Agent | Ch-3 |
| Fig 3.2 | Data Flow Diagram (DFD) Level 0 | Ch-3 |
| Fig 3.3 | Data Flow Diagram (DFD) Level 1 | Ch-3 |
| Fig 4.1 | ReAct Agent Loop — Thought → Action → Observe → Confidence | Ch-4 |
| Fig 4.2 | System Architecture Diagram (Backend + Frontend + External APIs) | Ch-4 |
| Fig 4.3 | Database Entity-Relationship (ER) Diagram | Ch-4 |
| Fig 4.4 | Task Priority Scoring Formula Breakdown | Ch-4 |
| Fig 4.5 | ChromaDB Memory Collections Architecture | Ch-4 |
| Fig 4.6 | User Interface Wireframe — Dashboard Page | Ch-4 |
| Fig 4.7 | User Interface Wireframe — Subscriptions Page | Ch-4 |
| Fig 4.8 | User Interface Wireframe — Insights Page | Ch-4 |
| Fig 5.1 | Agent Scratchpad Live Stream (SSE) — Screenshot | Ch-5 |
| Fig 5.2 | Task Cards with Priority Badges — Screenshot | Ch-5 |
| Fig 5.3 | Human-in-the-Loop Approval Gate — Screenshot | Ch-5 |
| Fig 5.4 | Subscription Tracker with Cancel Score — Screenshot | Ch-5 |
| Fig 5.5 | Insights Page with Spend Chart — Screenshot | Ch-5 |
| Fig 5.6 | Agent Confidence Score vs Retry Count Graph | Ch-5 |
| Fig 5.7 | Task Extraction Accuracy Graph (5 mock emails) | Ch-5 |
| Fig 6.1 | Real-world Applicability Domain Map | Ch-6 |

---

# LIST OF TABLES

| Table No. | Title | Page |
|---|---|---|
| Table 3.1 | Hardware Requirements | Ch-3 |
| Table 3.2 | Software Requirements | Ch-3 |
| Table 3.3 | Python Package Dependencies | Ch-3 |
| Table 3.4 | Frontend Dependencies | Ch-3 |
| Table 3.5 | Functional Requirements Specification | Ch-3 |
| Table 4.1 | Agent Tool Registry | Ch-4 |
| Table 4.2 | Task Priority Scoring Parameters | Ch-4 |
| Table 4.3 | Database Schema — Task Table | Ch-4 |
| Table 4.4 | Database Schema — Subscription Table | Ch-4 |
| Table 4.5 | Database Schema — EmailRecord Table | Ch-4 |
| Table 4.6 | Database Schema — PendingApproval Table | Ch-4 |
| Table 4.7 | REST API Endpoint Summary | Ch-4 |
| Table 5.1 | Test Case Results — Task Extraction | Ch-5 |
| Table 5.2 | Test Case Results — Priority Assignment | Ch-5 |
| Table 5.3 | Performance Metrics — Agent Loop | Ch-5 |
| Table 6.1 | Comparison with Existing Systems | Ch-6 |

---

# ABSTRACT

**[PURPOSE]**
The Life Admin Agent is an AI-powered personal assistant designed to automate the management of everyday administrative tasks that individuals routinely encounter through email — including utility bill reminders, subscription renewals, insurance deadlines, and recurring financial obligations. The primary purpose of this system is to eliminate the cognitive overhead and time expenditure associated with manual monitoring of such tasks by leveraging state-of-the-art Large Language Models (LLMs), intelligent agent architectures, and persistent vector memory.

**[METHODOLOGY]**
The system implements a ReAct (Reason-Act-Observe) agent loop powered by Anthropic's Claude Sonnet model as its core intelligence engine. Upon receipt of emails — either through Gmail OAuth2 integration or a mock dataset — the agent autonomously reasons through each email, selects and invokes appropriate tools from a registry of five specialized tools (parse_email, prioritise_tasks, track_finance, send_notification, web_search), and iterates with retry logic based on a self-scoring confidence evaluator. Task extraction results are stored in a SQLite relational database via SQLAlchemy ORM. Semantic memory of user preferences, task history, and action logs is maintained using ChromaDB, a persistent vector database that enables similarity-based retrieval for context-aware prioritisation. The system exposes a RESTful API through FastAPI and streams agent reasoning steps to a React 18 frontend via Server-Sent Events (SSE). A Groq-powered LLaMA 3.3 chatbot provides in-app guidance, and a Telegram bot delivers real-time notifications with interactive inline action buttons. Human-in-the-loop control gates require explicit user approval before high-impact actions such as P1 notifications or subscription cancellations are executed.

**[FINDINGS]**
Evaluation against a set of five diverse mock emails representative of real-world administrative scenarios demonstrated that the agent achieved over 85% task extraction accuracy with appropriate category classification. The priority scoring algorithm correctly assigned P1 status to overdue and high-value tasks, P2 to near-term deadlines, and P3 to routine reminders. The confidence-based retry mechanism successfully improved extraction quality in edge cases. The subscription tracking module accurately computed cancel scores and flagged unused services based on inactivity thresholds. The full-stack implementation, including real-time SSE streaming, human approval workflows, and the AI chatbot, operated cohesively without significant latency. The project demonstrates the practical viability of agent-based AI systems for personal productivity automation and establishes a strong foundation for further enhancements including multi-user support, mobile applications, and expanded email integrations.

---

# TABLE OF CONTENTS

| Chapter No. | Title | Page |
|---|---|---|
| | List of Abbreviations | iii |
| | List of Figures and Graphs | iv |
| | List of Tables | v |
| | Abstract | vi |
| **Chapter 1** | **Project Description and Outline** | 1 |
| 1.1 | Introduction | |
| 1.2 | Motivation for the Work | |
| 1.3 | About the Project and Techniques Used | |
| 1.4 | Problem Statement | |
| 1.5 | Objective of the Work | |
| 1.6 | Organization of the Project | |
| 1.7 | Summary | |
| **Chapter 2** | **Related Work Investigation** | |
| 2.1 | Introduction | |
| 2.2 | Core Area — Agentic AI and LLM-based Automation | |
| 2.3 | Existing Approaches and Methods | |
| 2.4 | Pros and Cons of Existing Approaches | |
| 2.5 | Issues and Observations from Investigation | |
| 2.6 | Summary | |
| **Chapter 3** | **Requirement Artifacts** | |
| 3.1 | Introduction | |
| 3.2 | Hardware and Software Requirements | |
| 3.3 | Specific Project Requirements | |
| 3.4 | Summary | |
| **Chapter 4** | **Design Methodology and Its Novelty** | |
| 4.1 | Methodology and Goal | |
| 4.2 | Functional Modules Design and Analysis | |
| 4.3 | Software Architectural Designs | |
| 4.4 | Subsystem Services | |
| 4.5 | User Interface Designs | |
| 4.6 | Summary | |
| **Chapter 5** | **Technical Implementation and Analysis** | |
| 5.1 | Outline | |
| 5.2 | Technical Coding and Code Solutions | |
| 5.3 | Working Layout of Forms | |
| 5.4 | Prototype Submission | |
| 5.5 | Test and Validation | |
| 5.6 | Performance Analysis | |
| 5.7 | Summary | |
| **Chapter 6** | **Project Outcome and Applicability** | |
| 6.1 | Outline | |
| 6.2 | Key Implementation Outlines of the System | |
| 6.3 | Significant Project Outcomes | |
| 6.4 | Project Applicability on Real-World Applications | |
| 6.5 | Inference | |
| **Chapter 7** | **Conclusions and Recommendation** | |
| 7.1 | Outline | |
| 7.2 | Limitations / Constraints of the System | |
| 7.3 | Future Enhancements | |
| 7.4 | Inference | |
| | References | |
| | Appendix A — API Endpoint Reference | |
| | Appendix B — Environment Configuration | |

---

# CHAPTER 1: PROJECT DESCRIPTION AND OUTLINE

## 1.1 Introduction

The digital age has brought with it an overwhelming volume of electronic communications. An average individual receives dozens of emails per day — spanning utility bills, subscription renewal notices, insurance policy reminders, e-commerce invoices, and general administrative correspondence. While email remains the primary medium for formal digital communication, the task of manually parsing, triaging, and acting upon these messages is time-consuming, error-prone, and cognitively exhausting. Important deadlines are missed, subscription fees continue to be charged for unused services, and bills go unpaid simply because they were buried under the weight of a cluttered inbox.

The Life Admin Agent is an AI-powered personal administration assistant built to solve precisely this problem. By combining the reasoning capabilities of large language models with an agentic execution architecture, persistent vector memory, and a modern web interface, the system autonomously processes incoming emails, extracts actionable tasks, assigns contextual priorities, tracks financial obligations, and delivers intelligent notifications — all with minimal user intervention.

At its core, the Life Admin Agent implements the ReAct (Reason + Act) agent paradigm, a prompting and execution strategy that enables LLMs to interleave natural language reasoning (Thoughts) with concrete tool invocations (Actions) and the interpretation of their outcomes (Observations). This iterative loop, combined with a self-scoring confidence evaluator and retry mechanisms, ensures high-quality and reliable outputs from the AI system.

The project is built as a full-stack application: a FastAPI-powered Python backend serves as the intelligence and data layer, while a React 18 single-page application provides a modern, responsive user interface. Real-time agent reasoning is streamed to the frontend via Server-Sent Events (SSE), giving users full transparency into how the AI thinks and acts on their behalf.

## 1.2 Motivation for the Work

The motivation for developing the Life Admin Agent arises from three key observations:

**1. The Inbox Management Problem:** Studies have shown that knowledge workers spend an average of 28% of their workday reading and responding to emails (McKinsey Global Institute, 2012). A significant portion of this time is spent identifying and acting on administrative tasks embedded within email content — a fundamentally repetitive, low-value activity that is highly amenable to automation.

**2. The Subscription Economy:** India's digital subscription market is growing rapidly, with millions of users subscribed to multiple streaming, SaaS, and utility services simultaneously. Research indicates that consumers underestimate their monthly subscription expenditure by an average of 2.5× (West Monroe Partners, 2022). Without active tracking, unused subscriptions silently drain finances month after month. An intelligent system capable of monitoring subscription activity and flagging underutilized services provides direct, measurable financial value.

**3. The Opportunity of Agentic AI:** With the emergence of capable LLMs such as GPT-4 and Claude, the possibility of building AI systems that not only understand language but can autonomously reason, plan, and execute multi-step tasks has become a practical reality. The ReAct framework, introduced by Yao et al. (2022), demonstrated that augmenting LLMs with tool-use capabilities dramatically improves their ability to complete complex real-world tasks. The Life Admin Agent applies this paradigm to the personal productivity domain.

## 1.3 About the Project and Techniques Used

The Life Admin Agent integrates several cutting-edge technologies and AI techniques:

**ReAct Agent Architecture:** The agent follows a structured Thought → Action → Observation → Confidence cycle for each email processed. The agent reasons about the email content, selects an appropriate tool, executes the tool, evaluates the result, and either proceeds or retries based on confidence scoring.

**Large Language Model (Anthropic Claude Sonnet):** Claude Sonnet (`claude-sonnet-4-20250514`) serves as the primary reasoning engine. It is invoked through the `parse_email` tool to extract structured task information from raw email text using carefully engineered system prompts.

**ChromaDB Vector Memory:** A persistent vector store maintains three memory collections: user preferences (e.g., preferred notification hour), task history (for similarity-based historical scoring), and action logs (for audit trails). This enables the agent to personalize its behavior based on past interactions.

**FastAPI Backend:** A high-performance asynchronous Python web framework serves as the backbone, exposing RESTful endpoints for task management, subscription tracking, approval workflows, and chatbot interactions.

**SQLite + SQLAlchemy ORM:** A lightweight relational database stores structured data across four tables: Tasks, Subscriptions, EmailRecords, and PendingApprovals.

**React 18 + Tailwind CSS Frontend:** A modern, responsive single-page application provides dashboards for task management, subscription analysis, and financial insights, with real-time agent visibility through SSE streaming.

**Groq LLaMA 3.3 Chatbot:** An in-app AI assistant powered by Groq's inference API and the LLaMA-3.3-70B model guides users through the application and enables manual subscription management via natural language commands.

**Telegram Bot Notifications:** Critical task alerts are delivered via Telegram with interactive inline keyboard buttons (Done / Snooze / Cancel), enabling users to act on notifications without opening the web application.

**Gmail OAuth2 Integration:** The system can fetch real emails from Gmail using OAuth2 authentication, with a mock email dataset available for demonstration and testing.

## 1.4 Problem Statement

Despite the widespread availability of AI email clients and productivity tools, there exists a significant gap in intelligent, agent-driven personal administration systems. Current solutions suffer from one or more of the following limitations:

- They require manual categorization and action by the user.
- They operate as passive filters rather than active, reasoning agents.
- They lack financial intelligence — i.e., the ability to track subscriptions, compute cancel scores, and identify financial waste.
- They provide no mechanism for human-in-the-loop control over sensitive automated actions.
- They offer no persistent memory to personalize behavior across sessions.

**This project addresses the problem:** *How can an AI agent autonomously process personal administrative emails, extract, prioritize, and track actionable tasks with financial context, and deliver timely, intelligent notifications — while maintaining human oversight over critical decisions?*

## 1.5 Objective of the Work

The primary objectives of the Life Admin Agent project are:

1. To implement a fully functional ReAct agent loop that processes email content and extracts structured task data using an LLM.
2. To design and implement a multi-factor task prioritization algorithm that considers deadline proximity, financial impact, user history, and urgency signals.
3. To build a subscription tracking module that monitors recurring financial obligations, computes inactivity-based cancel scores, and flags potentially unused services.
4. To establish a human-in-the-loop approval mechanism for high-impact agent actions such as P1 notifications, high-value bill payments, and subscription cancellations.
5. To implement persistent vector memory using ChromaDB that enables personalized, context-aware agent behavior across sessions.
6. To develop a real-time frontend dashboard that streams the agent's reasoning process live, with full task management capabilities.
7. To integrate multiple notification channels — specifically Telegram with interactive action buttons — for timely user alerts.
8. To provide a Groq-powered AI assistant for in-app guidance and natural language subscription management.
9. To build an evaluation framework that measures agent performance against target accuracy metrics.

## 1.6 Organization of the Project

The project is organized as a monorepo with the following top-level structure:

```
life-admin-agent/
├── backend/           # FastAPI application, agent, database
│   ├── agent/         # ReAct loop, tools, memory, evaluator
│   ├── main.py        # API routes and application entry point
│   ├── models.py      # SQLAlchemy database models
│   ├── gmail.py       # Gmail OAuth2 and mock email provider
│   ├── chatbot.py     # Groq LLaMA chatbot integration
│   └── telegram_bot.py # Telegram notification and callback handler
├── frontend/          # React 18 + Tailwind CSS SPA
│   └── src/
│       ├── pages/     # Dashboard, Subscriptions, Insights
│       ├── components/ # TaskCard, AgentPanel, ApprovalGate, ChatBot
│       └── hooks/     # useAgentStream (SSE hook)
├── scripts/           # Evaluation harness
└── mock_emails.json   # 5 sample emails for demo/testing
```

The backend and frontend are loosely coupled via a REST API, with real-time communication established through SSE. The system can be run locally with minimal configuration — only an Anthropic API key is required for core functionality.

## 1.7 Summary

Chapter 1 has introduced the Life Admin Agent project, established the motivation rooted in inbox overload and subscription mismanagement, described the key technologies and AI techniques employed, articulated the problem statement and objectives, and outlined the overall project organization. The subsequent chapters provide a comprehensive exploration of related work, system requirements, architectural design, technical implementation, and evaluation results.

---

# CHAPTER 2: RELATED WORK INVESTIGATION

## 2.1 Introduction

The development of the Life Admin Agent draws upon a rich body of research and practice in the areas of AI agents, large language models, natural language processing for email and document analysis, personal information management systems, and financial tracking applications. This chapter surveys the relevant literature and existing systems, identifies their strengths and limitations, and contextualizes the contributions of the present work.

## 2.2 Core Area — Agentic AI and LLM-based Automation

**Agentic AI Systems:** The concept of AI agents — systems that perceive their environment, make decisions, and take actions to achieve goals — has been a foundational topic in AI research since the early work of Wooldridge and Jennings (1995), who defined intelligent agents in terms of autonomy, reactivity, pro-activeness, and social ability. More recently, the emergence of LLM-based agents has dramatically expanded the practical scope of this concept by enabling natural language as the interface for both perception and action.

**The ReAct Framework:** Yao et al. (2022) introduced the ReAct (Reasoning + Acting) paradigm, which demonstrated that LLMs could be prompted to interleave verbal reasoning traces with concrete actions in an iterative loop. This approach significantly outperformed pure chain-of-thought reasoning and action-only approaches on knowledge-intensive tasks, establishing the theoretical foundation for the agent architecture used in this project.

**Tool-augmented LLMs:** Schick et al. (2023) proposed Toolformer, demonstrating that LLMs could be trained to use external APIs and tools autonomously. The Life Admin Agent builds on this concept by providing a curated registry of five domain-specific tools (parse_email, prioritise_tasks, track_finance, send_notification, web_search) that the LLM agent orchestrates through structured reasoning.

**Vector Databases for AI Memory:** The use of vector embeddings and similarity search for AI agent memory was popularized by systems such as MemGPT (Packer et al., 2023), which demonstrated the value of persistent, hierarchical memory architectures for LLM-based agents. ChromaDB, used in this project, represents the practical implementation of this pattern for storing and retrieving task history, user preferences, and action logs through semantic similarity.

## 2.3 Existing Approaches and Methods

### 2.3.1 Rule-based Email Filtering Systems

Traditional email management systems such as Gmail's Priority Inbox and Microsoft Outlook's Focused Inbox use rule-based heuristics and supervised machine learning classifiers trained on labeled email corpora to categorize incoming messages. Tools like Sanebox apply similar server-side ML classification. While effective at separating "important" from "unimportant" emails, these systems do not extract structured task data, compute financial impact, or take autonomous action on behalf of the user.

### 2.3.2 General-purpose AI Assistants

Systems such as Google Gemini with Gmail integration, Microsoft Copilot for Outlook, and Apple Intelligence represent the current state of commercial AI-augmented email management. These systems can summarize emails, draft replies, and identify action items using LLMs. However, they remain primarily conversational interfaces — they require the user to actively query them rather than proactively monitoring the inbox and triggering autonomous workflows. They also lack domain-specific financial intelligence such as subscription tracking and cancel score computation.

### 2.3.3 Personal Finance Tracking Applications

Applications such as Mint, YNAB (You Need A Budget), and INDmoney provide subscription tracking and budget management capabilities. However, these systems require manual data entry or bank statement imports and do not integrate with email as a data source. They perform no AI reasoning over email content and provide no task management or notification capabilities beyond basic spending alerts.

## 2.4 Pros and Cons of the Stated Approaches

| Approach | Strengths | Weaknesses |
|---|---|---|
| Rule-based Email Filters | Fast, deterministic, no API cost | Cannot extract structured data, no financial reasoning |
| General-purpose AI Assistants | Natural language interface, broad coverage | Passive (requires user queries), no financial domain intelligence |
| Personal Finance Apps | Accurate subscription tracking, visual analytics | No email integration, requires manual input, no task management |
| LLM-only Systems (no tools) | Flexible natural language understanding | Hallucination risk, no persistent state, no action execution |
| ReAct Agent (this project) | Autonomous, tool-augmented, memory-enabled, human-in-loop | Requires API key, LLM latency, potential token cost |

## 2.5 Issues and Observations from Investigation

The investigation of existing systems reveals several critical gaps that motivate the design of the Life Admin Agent:

1. **Lack of proactive agency:** Existing systems are reactive. They respond to user queries rather than proactively monitoring email streams and triggering automated workflows.

2. **Absence of financial intelligence in task systems:** Task management tools (Todoist, Notion Tasks, Asana) do not understand the financial context of tasks. A reminder to renew car insurance is treated identically to a reminder to buy groceries, despite their vastly different financial and legal implications.

3. **No human-in-the-loop control for AI systems:** Commercial AI email tools lack mechanisms for requiring explicit user approval before executing consequential actions such as cancelling a subscription or sending a high-priority notification during off-hours.

4. **Absence of persistent, personalized memory:** Most AI email tools start fresh with each session. The Life Admin Agent's ChromaDB memory enables the system to learn from past task completion patterns and adapt its prioritization accordingly.

5. **Transparency deficit:** Users of AI-powered email tools have no visibility into how the AI arrived at its conclusions. The Life Admin Agent's Agent Panel — which streams the full Thought → Action → Observation chain via SSE — addresses this by providing complete transparency into agent reasoning.

## 2.6 Summary

The related work investigation establishes that while significant progress has been made in email AI, personal finance management, and general-purpose LLM assistants, no existing system combines autonomous agent-based email processing, financial intelligence, persistent vector memory, human-in-the-loop control, and real-time reasoning transparency into a unified personal administration platform. The Life Admin Agent addresses all of these gaps through its integrated, multi-layered architecture.

---

# CHAPTER 3: REQUIREMENT ARTIFACTS

## 3.1 Introduction

This chapter documents the complete set of requirements for the Life Admin Agent system, including hardware specifications, software dependencies, functional requirements, and non-functional constraints. Requirements were gathered through analysis of the target use case, review of related systems, and iterative refinement during the design process.

## 3.2 Hardware and Software Requirements

### Table 3.1 — Hardware Requirements

| Component | Minimum Specification | Recommended Specification |
|---|---|---|
| Processor | Intel Core i5 / AMD Ryzen 5 | Intel Core i7 / Apple M1 |
| RAM | 8 GB | 16 GB |
| Storage | 10 GB free space | 20 GB SSD |
| Network | Broadband internet connection | Stable broadband (for API calls) |
| Operating System | Windows 10 / macOS 11 / Ubuntu 20.04 | macOS 13+ / Ubuntu 22.04 |

### Table 3.2 — Software Requirements

| Software | Version | Purpose |
|---|---|---|
| Python | 3.11+ | Backend development |
| Node.js | 18+ | Frontend development |
| npm | 9+ | Frontend package management |
| Git | 2.40+ | Version control |
| SQLite | 3.x | Relational database (bundled) |
| Google Chrome / Firefox | Latest | Frontend browser |

### Table 3.3 — Python Package Dependencies

| Package | Version | Purpose |
|---|---|---|
| fastapi | ≥ 0.110.0 | REST API framework |
| uvicorn | ≥ 0.29.0 | ASGI server |
| sqlalchemy | ≥ 2.0.0 | ORM for SQLite |
| pydantic | ≥ 2.0.0 | Data validation |
| anthropic | ≥ 0.25.0 | Claude LLM API client |
| chromadb | ≥ 0.5.0 | Vector database |
| httpx | ≥ 0.27.0 | Async HTTP client |
| python-dotenv | ≥ 1.0.0 | Environment variable management |
| groq | ≥ 0.8.0 | Groq LLaMA API client |
| python-telegram-bot | ≥ 21.0 | Telegram bot SDK |
| google-auth-oauthlib | ≥ 1.2.0 | Gmail OAuth2 |
| google-api-python-client | ≥ 2.128.0 | Gmail API client |
| sse-starlette | ≥ 1.8.2 | Server-Sent Events support |
| aiofiles | ≥ 23.0.0 | Async file I/O |

### Table 3.4 — Frontend Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | 18.3.1 | UI library |
| react-dom | 18.3.1 | DOM rendering |
| react-router-dom | 6.22.3 | Client-side routing |
| recharts | 2.12.3 | Data visualization |
| lucide-react | 0.378.0 | Icon library |
| tailwindcss | 3.4.3 | Utility-first CSS |
| vite | 5.2.11 | Build tool and dev server |

## 3.3 Specific Project Requirements

### 3.3.1 Data Requirements

The system requires the following data inputs and storage:

- **Email data:** Raw email content (subject, sender, body text) from Gmail OAuth2 or the local mock dataset (5 emails covering: subscription renewal, overdue utility bill, payment receipt, insurance renewal, and SaaS invoice).
- **Task data:** Structured records with fields: task title, due date, amount (INR), category (bill/deadline/subscription/renewal/reminder), priority (P1/P2/P3), priority score, explanation, status (pending/done/snoozed), confidence score.
- **Subscription data:** Service name, billing amount, billing cycle, last seen date, days since seen, cancel score, activity status.
- **Vector memory:** Semantic embeddings of task history, user preferences (notification hour, currency, language), and action logs, stored in ChromaDB collections.
- **Approval data:** Pending human approval records with action type, associated task, and approval status.

### 3.3.2 Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | System shall extract structured tasks from email body text using an LLM | High |
| FR-02 | System shall assign priority levels (P1/P2/P3) based on multi-factor scoring | High |
| FR-03 | System shall track subscription records and compute cancel scores | High |
| FR-04 | System shall present the agent's reasoning steps in real-time via SSE | High |
| FR-05 | System shall require human approval before executing P1 notifications | High |
| FR-06 | System shall persist tasks and subscriptions to a SQLite database | High |
| FR-07 | System shall send Telegram notifications with inline action buttons | Medium |
| FR-08 | System shall fetch real emails via Gmail OAuth2 | Medium |
| FR-09 | System shall provide an in-app AI chatbot for guidance | Medium |
| FR-10 | System shall display financial insights and monthly spend analytics | Medium |
| FR-11 | System shall support task status updates (done/snoozed/pending) | Medium |
| FR-12 | System shall retry LLM calls when confidence falls below 0.7 | High |
| FR-13 | System shall maintain vector memory across sessions using ChromaDB | High |
| FR-14 | System shall provide a demo mode with 5 mock emails | Low |
| FR-15 | System shall allow manual addition of subscriptions via chatbot | Low |

### 3.3.3 Performance and Security Requirements

- **Response Time:** API endpoints shall respond within 3 seconds for database-only queries; LLM-backed endpoints may take 5–15 seconds.
- **Concurrency:** The FastAPI ASGI server shall handle at least 10 concurrent API requests.
- **Data Security:** No sensitive credentials (API keys, OAuth tokens) shall be committed to version control; all secrets shall be managed via `.env` files.
- **API Security:** The Telegram webhook endpoint shall validate a shared secret token before processing callbacks.
- **Data Privacy:** Email body text stored in the database shall be truncated to 2,000 characters to minimize sensitive data retention.
- **Reliability:** The agent loop shall implement graceful error handling for all tool calls; individual tool failures shall not crash the agent loop.

### 3.3.4 Look and Feel Requirements

- The frontend shall use a dark-mode aesthetic with a deep navy/slate color palette.
- Priority indicators shall use color coding: P1 = Red, P2 = Amber, P3 = Green.
- The Agent Panel shall display reasoning steps with distinct visual styles for Thoughts (blue), Actions (purple), Observations (teal), and Confidence scores (grey).
- All interactive elements (task cards, approval gates, subscription rows) shall include hover states and smooth CSS transitions.
- The interface shall be responsive and usable on screens from 768px to 2560px wide.

### 3.3.5 Constraint Requirements

- The system requires an active internet connection for all LLM API calls.
- Mock email mode (`USE_MOCK_EMAILS=true`) allows full demonstration without Gmail OAuth2 setup.
- Claude API calls incur per-token costs; the system minimizes token usage through targeted system prompts.
- ChromaDB creates a local `chroma_db/` directory under the backend folder for persistent storage.

## 3.4 Summary

This chapter has documented the complete set of hardware, software, functional, performance, security, and design requirements for the Life Admin Agent system. The requirements specification provides a comprehensive blueprint that guided all subsequent design and implementation decisions.

---

# CHAPTER 4: DESIGN METHODOLOGY AND ITS NOVELTY

## 4.1 Methodology and Goal

The Life Admin Agent is designed around the **ReAct (Reason + Act)** agent paradigm, which represents the central methodological novelty of the project. Unlike traditional rule-based automation systems or simple LLM chatbots, the ReAct loop enables the agent to reason explicitly about its observations, select context-appropriate tools, evaluate the quality of its outputs, and iterate autonomously until a satisfactory result is achieved.

The design goal is a system that behaves as a **trusted, transparent, and controllable AI delegate** — one that takes on the cognitive burden of email-based administration while keeping the human fully informed and in control of consequential decisions.

The architectural methodology follows a **separation of concerns** principle:
- The **agent layer** handles AI reasoning, tool orchestration, and confidence evaluation.
- The **data layer** handles persistence and retrieval (SQLite + ChromaDB).
- The **API layer** handles communication between backend and frontend.
- The **presentation layer** handles visualization and user interaction.

## 4.2 Functional Modules Design and Analysis

The system is decomposed into six primary functional modules:

**Module 1 — Email Ingestion:** Fetches email content via Gmail OAuth2 API or loads the local mock dataset. Each email is represented as a dictionary with fields: id, gmail_message_id, subject, sender, body_text.

**Module 2 — Agent Loop (ReAct):** Implements the core intelligence of the system. For each email, the loop executes up to five sequential tool phases:
1. Parse email → extract tasks (with retry up to 3×)
2. Prioritise tasks → assign P1/P2/P3
3. Track finance → upsert subscription records
4. Persist to DB → save tasks and email records
5. Request approval → queue P1 notifications for human review

**Module 3 — Tool Registry:** Five specialized tools are registered in a central dictionary (`TOOL_REGISTRY`) mapping tool names to descriptions, input schemas, and executor functions.

**Module 4 — Memory Layer:** ChromaDB collections provide three types of persistent memory:
- `user_preferences`: Key-value preferences (notification hour, currency, language)
- `task_history`: Historical task records for similarity-based scoring
- `action_log`: Audit trail of all agent actions and approval decisions

**Module 5 — API Layer:** FastAPI exposes 14 REST endpoints plus an SSE stream, allowing the frontend and Telegram bot to interact with agent results, manage tasks and subscriptions, and process approval decisions.

**Module 6 — Frontend Dashboard:** Three pages (Dashboard, Subscriptions, Insights) with four reusable components (TaskCard, AgentPanel, ApprovalGate, ChatBot) provide the user-facing interface.

## 4.3 Software Architecture Design

### System Architecture Overview

```
                        ┌─────────────────────────────┐
                        │       React 18 Frontend      │
                        │  Dashboard | Subs | Insights  │
                        │  AgentPanel (SSE stream)      │
                        │  ChatBot (Groq/LLaMA)         │
                        └──────────┬──────────┬─────────┘
                                   │ REST API │ SSE
                        ┌──────────▼──────────▼─────────┐
                        │      FastAPI Backend           │
                        │   /api/tasks, /api/subs...     │
                        │   /api/agent/stream (SSE)      │
                        └──────────┬────────────────────┘
                                   │
                  ┌────────────────▼────────────────────┐
                  │         Agent Layer (ReAct)          │
                  │  LoopRunner → Tools → Evaluator      │
                  └──┬─────────┬──────────┬─────────────┘
                     │         │          │
           ┌─────────▼──┐ ┌───▼────┐ ┌───▼──────────────┐
           │ Claude API  │ │SQLite  │ │   ChromaDB        │
           │ (Anthropic) │ │  ORM   │ │  Vector Memory    │
           └─────────────┘ └────────┘ └──────────────────┘
                     │
           ┌─────────▼──────────┐     ┌──────────────────┐
           │  Telegram Bot      │     │  Gmail OAuth2     │
           │  Notifications     │     │  (Email Source)   │
           └────────────────────┘     └──────────────────┘
```

### The ReAct Agent Loop — Detailed Design

The `AgentScratchpad` class maintains a sequential log of all reasoning steps. Each step is one of five types: `thought`, `action`, `observation`, `confidence`, or `final_answer`. These steps are yielded as SSE events in real-time:

```
Email Input
    │
    ▼
[THOUGHT] "I need to extract tasks from this email..."
    │
    ▼
[ACTION] parse_email(email_text) ──► Claude Sonnet API
    │
    ▼
[OBSERVATION] {tasks: [...], raw: "..."}
    │
    ▼
[CONFIDENCE] evaluator.score_response("parse_email", result) → 0.0–1.0
    │
    ├── Score ≥ 0.7? → Proceed
    └── Score < 0.7 AND retry < 3? → Rephrase prompt → Retry
    │
    ▼
[ACTION] prioritise_tasks(tasks) ──► Multi-factor scoring
    │
    ▼
[ACTION] track_finance(task) ──► SQLite Subscription upsert
    │
    ▼
[PERSIST] Save tasks to SQLite + ChromaDB history
    │
    ▼
[PENDING_APPROVAL] Queue P1 tasks for human review
    │
    ▼
[FINAL_ANSWER] {tasks, task_count, p1_count, pending_approvals}
```

## 4.4 Subsystem Services

### 4.4.1 Tool 1 — parse_email

**Purpose:** Extract structured, actionable tasks from raw email text using Claude Sonnet.

**Input:** Raw email text (subject + body), optional retry prompt suffix.

**Process:** A carefully engineered system prompt instructs Claude to output ONLY valid JSON with fields: task_title, due_date, amount, category, urgency, and confidence. Markdown fence stripping (`re.sub`) ensures clean JSON parsing.

**Output:** `{"tasks": [...], "raw": "..."}` or `{"tasks": [], "error": "..."}` on failure.

### 4.4.2 Tool 2 — prioritise_tasks

**Purpose:** Assign priority levels (P1/P2/P3) to extracted tasks using a deterministic multi-factor scoring algorithm.

**Scoring Formula (max 100 points):**

| Factor | Max Points | Calculation |
|---|---|---|
| Deadline Proximity | 40 | 40 pts if overdue; 38 pts if due ≤ 2 days; scales down to 2 pts for > 30 days |
| Financial Impact | 30 | 30 pts if amount > ₹5,000; 20 pts if > ₹1,000; 10 pts if > ₹0 |
| User History | 20 | ChromaDB similarity query → completion rate × 20 pts |
| Stress Keywords | 10 | 10 pts if title/urgency contains: urgent, overdue, final notice, disconnection, expire, lapse, immediately |

**Priority Brackets:** P1 ≥ 70 pts | P2: 40–69 pts | P3 < 40 pts

### 4.4.3 Tool 3 — track_finance

**Purpose:** Maintain subscription records and identify financial optimization opportunities.

**Process:** Extracts service name from email subject using a keyword dictionary (Netflix, Spotify, BESCOM, ICICI Lombard, etc.). Upserts a Subscription database record with last_seen_date, billing amount, and billing cycle. Computes cancel_score = amount × days_since_seen for all subscriptions. Flags services with days_since_seen > 45 as potentially unused.

**Output:** Current subscription record + Top 3 cancel candidates.

### 4.4.4 Tool 4 — send_notification

**Purpose:** Deliver rich, formatted notifications through Telegram with interactive action buttons.

**Process:** Checks current time against user's preferred notification hour (from ChromaDB). If within window, sends a Markdown-formatted Telegram message with an inline keyboard providing three action buttons: ✅ Done, ⏰ Snooze 1 day, 🚫 Cancel subscription. Falls back to local logging if no Telegram credentials are configured.

**Human-in-the-loop gate:** Notifications for P1 tasks require explicit approval through the `/api/approve-action` endpoint before `send_notification` is invoked.

### 4.4.5 Tool 5 — web_search

**Purpose:** Verify subscription status or look up company/service information using DuckDuckGo Instant Answer API (no API key required).

**Process:** Issues an HTTP GET to `https://api.duckduckgo.com/` with the query. Extracts AbstractText and up to 3 RelatedTopics from the response. Assigns relevance scores (0.9 for abstract, 0.6 for related topics).

### 4.4.6 Confidence Evaluator

**Purpose:** Score the quality of each tool's output and trigger retry logic when quality is insufficient.

**Scoring by action:**
- `parse_email`: Averages field completeness (task_title/due_date/category present) + category validity + amount validity across all extracted tasks.
- `prioritise_tasks`: Checks presence of priority label, explanation, and numeric score.
- `track_finance`: 0.9 if service_name and amount present; else 0.6.
- `send_notification`: 0.95 if sent = True; else 0.4.
- `web_search`: 0.3 to 1.0 based on number of results found.

**Retry logic:** `should_retry(confidence, retry_count)` returns True if confidence < 0.7 AND retry_count < 3. On retry, `rephrase_prompt` appends a hint to the original prompt guiding the LLM toward more complete output.

## 4.5 User Interface Design

The frontend is a React 18 SPA with React Router providing client-side navigation across three pages. All pages share a common navbar and use a dark-mode glassmorphism aesthetic with Tailwind CSS.

### Page 1 — Dashboard
The primary workspace displaying:
- **Stats Bar:** Four KPI cards (Total Tasks, P1 Alerts, Monthly Spend, Unused Subscriptions)
- **Agent Panel:** Real-time SSE stream of reasoning steps with Start Demo / Stop controls
- **Approval Gate:** Cards for pending human approvals with Approve/Reject actions
- **Filter Bar:** Task filter buttons (All, Pending, P1, P2, P3)
- **Task List:** Priority-sorted TaskCards with status update controls

### Page 2 — Subscriptions
A comprehensive subscription management view featuring:
- **Cancel Candidates Panel:** Top 3 subscriptions ranked by cancel score
- **All Subscriptions Table:** Service name, amount, billing cycle, last seen date, days inactive, activity status
- **Manual Add Form:** Direct subscription entry integrated with the chatbot

### Page 3 — Insights
A data visualization dashboard including:
- **Monthly Spend Chart:** Bar chart (Recharts) showing 3-month spend trend
- **Task Priority Donut:** Pie chart showing P1/P2/P3 task distribution
- **Completion Rate Gauge:** Percentage of tasks marked as done
- **AI Suggestions Panel:** Up to 5 actionable recommendations (cancel unused subs, act on P1 tasks)

### Component Architecture

| Component | Purpose |
|---|---|
| `TaskCard` | Renders individual task with priority badge, due date, amount, explanation, and status buttons |
| `AgentPanel` | Streaming display of ReAct reasoning steps with type-specific styling |
| `ApprovalGate` | Human approval interface for queued high-impact actions |
| `ChatBot` | Floating AI assistant with Groq/LLaMA backend |

## 4.6 Summary

Chapter 4 has presented the complete design of the Life Admin Agent, covering the ReAct methodology, the six functional modules, the full system architecture, the detailed design of each of the five agent tools and the confidence evaluator, the database schema, the REST API surface, and the three-page user interface design. The novelty of the system lies in the integration of the ReAct agent loop with domain-specific financial intelligence, persistent vector memory, human-in-the-loop control, and real-time reasoning transparency — a combination that, to the best knowledge of the authors, has not previously been implemented in the personal productivity domain.
