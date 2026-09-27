# KANBAN BOARD — Kanban Task Planner

> **Plan. Organize. Track. Complete.**

Planora is a responsive **Kanban-based task management application** designed to provide users with a simple and visual way to organize their daily work. The application represents tasks through different stages of a workflow, allowing users to understand what needs to be started, what is currently being worked on, and what has already been completed.

The project is developed using **HTML5, CSS3, and JavaScript**, with a strong focus on frontend fundamentals, dynamic DOM manipulation, responsive design, user interaction, and clean interface design.

---

# 1. Project Overview

Task management is an important part of both personal productivity and professional software development. As the number of tasks increases, maintaining a simple list can make it difficult to understand the current state of work.

A Kanban board provides a visual solution to this problem by dividing work into different stages. Instead of treating tasks as a static list, each task moves through a defined workflow.

Planora implements this concept through three primary stages:

```text
TO DO  →  IN PROGRESS  →  DONE
```

Each stage represents a different state of the task lifecycle. This allows users to visually monitor their workload and track progress without requiring a complex project management system.

---

# 2. Problem Statement

Managing daily tasks using traditional notes, text files, or simple lists can become inefficient when multiple tasks are involved.

A conventional task list generally provides information about **what** needs to be done, but does not always provide a clear representation of **where a task currently stands in the workflow**.

The problem can therefore be summarized as:

> **How can we provide users with a simple, visual, and interactive system for organizing tasks according to their current progress?**

Planora addresses this problem by introducing a Kanban-style workflow where every task has a visible status.

### Major problems addressed

* Difficulty tracking multiple tasks simultaneously
* Lack of visual representation of task progress
* Difficulty distinguishing pending and active work
* No clear separation between completed and incomplete tasks
* Static task lists becoming difficult to manage
* Lack of an intuitive workflow for moving tasks through different stages

---

# 3. Proposed Solution

Planora introduces a visual Kanban workspace where tasks are represented as interactive cards.

Instead of keeping every task in one list, tasks are divided into three logical columns:

### To Do

Contains tasks that have been created but have not yet been started.

### In Progress

Contains tasks that are currently being worked on.

### Done

Contains tasks that have been completed.

The resulting workflow is:

```text
                  TASK LIFECYCLE

┌──────────────┐
│    TO DO     │
│              │
│ New Tasks    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ IN PROGRESS  │
│              │
│ Active Work  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     DONE     │
│              │
│ Completed    │
└──────────────┘
```

---

# 4. Project Objectives

The primary objective of Planora is to build a practical task management interface while applying fundamental and intermediate frontend development concepts.

### Functional Objectives

* Create tasks dynamically
* Store task title and description during creation
* Display tasks inside the Kanban board
* Organize tasks according to their current status
* Move tasks between workflow stages
* Delete unnecessary tasks
* Display task counts for each stage
* Provide a simple modal-based task creation interface
* Provide dark and light theme functionality

### Technical Objectives

* Practice DOM manipulation
* Understand JavaScript event handling
* Implement dynamic UI updates
* Work with CSS custom properties
* Create reusable styling patterns
* Implement responsive layouts
* Understand drag-and-drop interactions
* Create interactive UI components
* Maintain separation between structure, styling, and behavior

### Design Objectives

* Maintain a clean interface
* Reduce unnecessary visual complexity
* Provide clear visual hierarchy
* Make the interface usable on multiple devices
* Keep task information easy to scan
* Provide consistent spacing and component styling

---

# 5. Project Workflow

The overall application follows a simple user-driven workflow.

```text
                    ┌─────────────────┐
                    │      USER       │
                    └────────┬────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Open Planora Board  │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │   Create New Task   │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Enter Task Details  │
                  │ Title + Description │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │       TO DO         │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │    IN PROGRESS      │
                  └──────────┬──────────┘
                             │
                             ▼
                  ┌─────────────────────┐
                  │        DONE         │
                  └─────────────────────┘
```

---

# 6. Application Architecture

Planora follows a simple frontend architecture where each technology has a specific responsibility.

```text
                    PLANORA
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
       HTML5         CSS3       JavaScript
          │            │            │
          ▼            ▼            ▼
     Structure      Styling      Logic
          │            │            │
          └────────────┼────────────┘
                       │
                       ▼
                  User Interface
                       │
                       ▼
                 Kanban Workspace
```

### HTML5

HTML provides the structural foundation of the application.

It defines:

* Navigation
* Kanban board
* Task columns
* Task cards
* Modal interface
* Buttons
* Input fields
* Text areas
* Footer

### CSS3

CSS controls the visual presentation and responsive behavior.

It manages:

* Layout
* Colors
* Typography
* Spacing
* Borders
* Rounded corners
* Theme variables
* Responsive breakpoints
* Modal styling
* Interactive states

### JavaScript

JavaScript provides the application's dynamic behavior.

It manages:

* User events
* Task creation
* Task deletion
* DOM manipulation
* Task movement
* Task counts
* Modal visibility
* Theme switching
* Dynamic interface updates

---

# 7. Functional Workflow

When a user creates a task, the application follows a sequence of operations.

```text
User clicks "Add New Task"
             │
             ▼
      Open Task Modal
             │
             ▼
      Enter Task Details
             │
             ▼
        Click Add Task
             │
             ▼
      Validate Input
             │
             ▼
       Create Task Card
             │
             ▼
         Add to To Do
             │
             ▼
      Update Task Count
             │
             ▼
        Update UI
```

This workflow demonstrates the relationship between user interaction, JavaScript logic, DOM manipulation, and the final rendered interface.

---

# 8. Kanban State Management

Every task can be considered to have a specific state.

```text
┌─────────────┐
│   CREATED   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    TO DO    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ IN PROGRESS │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    DONE     │
└─────────────┘
```

The visual movement of tasks provides users with an immediate understanding of the current state of their work.

---

# 9. Core Features

## Task Creation

Users can create a new task by opening the task creation modal.

Each task contains:

* Task title
* Task description
* Current workflow status

New tasks are initially placed in the **To Do** column.

---

## Task Organization

Tasks are organized into three workflow columns:

```text
┌─────────────┬─────────────────┬─────────────┐
│    TO DO    │   IN PROGRESS   │    DONE     │
├─────────────┼─────────────────┼─────────────┤
│ Planned     │ Active          │ Completed   │
│ Tasks       │ Tasks           │ Tasks       │
└─────────────┴─────────────────┴─────────────┘
```

This provides a simple visual representation of the overall workload.

---

## Task Deletion

Tasks that are no longer required can be removed using the delete action provided on the task card.

This keeps the workspace clean and prevents unnecessary tasks from accumulating.

---

## Dynamic Task Counts

Each column displays the number of tasks currently present in that workflow stage.

For example:

```text
To Do          3
In Progress    2
Done           5
```

The count provides an immediate summary of the current workload.

---

# 10. Theme System

Planora supports both dark and light visual modes.

The theme system uses **CSS custom properties**, allowing the primary colors to be changed centrally.

### Dark Mode

Designed for a low-light, minimal interface.

```text
Background     → Black / Dark
Cards          → Dark Gray
Text           → Light
Controls       → Dark
```

### Light Mode

Provides a softer workspace with a linen-inspired light background.

```text
Background     → Warm White
Cards          → Light
Text           → Dark
Controls       → Light
```

The theme toggle provides a quick way for users to switch between both visual environments.

---

# 11. Responsive Design

Modern applications need to work across different screen sizes.

Planora is designed to adapt to:

* Desktop computers
* Laptops
* Tablets
* Mobile phones
* Small-screen devices

The responsive layout adjusts spacing, sizing, and column behavior depending on the available viewport width.

### Desktop

```text
┌────────────┬────────────┬────────────┐
│   TO DO    │ IN PROGRESS│    DONE    │
└────────────┴────────────┴────────────┘
```

### Mobile

```text
┌─────────────────────┐
│       TO DO         │
├─────────────────────┤
│       TASK          │
└─────────────────────┘

┌─────────────────────┐
│    IN PROGRESS      │
├─────────────────────┤
│       TASK          │
└─────────────────────┘

┌─────────────────────┐
│        DONE         │
└─────────────────────┘
```

---

# 12. UI/UX Principles

The interface was designed around several basic product-design principles.

### Visual Hierarchy

Important information such as task titles and workflow status is given greater visual prominence.

### Consistency

Common properties such as:

* Padding
* Border radius
* Colors
* Button styles
* Typography

are controlled using CSS variables.

### Simplicity

The interface intentionally avoids unnecessary controls and keeps the primary workflow visible.

### Feedback

User interactions provide visible changes to communicate that an action has occurred.

### Responsiveness

The interface adapts to different viewport sizes instead of relying on a fixed desktop layout.

---

# 13. Technologies Used

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| HTML5           | Application structure         |
| CSS3            | Styling and responsive design |
| JavaScript      | Application logic             |
| DOM API         | Dynamic UI updates            |
| CSS Variables   | Theme and design system       |
| Drag & Drop API | Task movement                 |
| Media Queries   | Responsive behavior           |

---

# 14. Project Structure

```text
PLANORA/
│
├── index.html
│
├── style.css
│
├── script.js
│
├── assets/
│   └── logo.png
│
└── README.md
```

### File Responsibilities

```text
index.html
     │
     └── Application structure

style.css
     │
     └── Visual design + responsive layout

script.js
     │
     └── Application behavior

assets/
     │
     └── Images and application assets

README.md
     │
     └── Project documentation
```

---

# 15. Implementation Approach

The application was implemented incrementally.

### Phase 1 — Structure

The initial application structure was created using semantic HTML.

The primary components were:

* Navigation
* Board
* Task columns
* Modal
* Footer

### Phase 2 — Styling

CSS was introduced to create:

* Dark workspace
* Task cards
* Column layouts
* Buttons
* Modal interface
* Responsive behavior

### Phase 3 — Interactivity

JavaScript was added to handle:

* Modal opening
* Modal closing
* Task creation
* Task deletion
* Dynamic task rendering
* Task movement
* Count updates

### Phase 4 — User Experience

Additional functionality was introduced:

* Theme switching
* Responsive behavior
* Visual feedback
* Improved spacing
* Better component hierarchy

---

# 16. Example Use Case

Consider a user who receives multiple responsibilities during the day.

For example:

```text
Task 1 → Buy milk
Task 2 → Attend meeting
Task 3 → Complete assignment
Task 4 → Submit project
```

Initially, these tasks appear in:

```text
TO DO
```

When the user starts working on the assignment:

```text
TO DO
   ↓
IN PROGRESS
```

After completing it:

```text
IN PROGRESS
   ↓
DONE
```

This provides a simple visual representation of progress throughout the day.

---

# 17. Expected Result

After implementation, the user receives a functional Kanban workspace where tasks can be created, organized, tracked, and completed through a visual workflow.

The expected application provides:

* A clean Kanban board
* Three workflow stages
* Dynamic task cards
* Task counts
* Task deletion
* Modal-based task creation
* Theme switching
* Responsive behavior
* Interactive task movement
* Consistent visual design

---

# 18. Results and Outcomes

The project successfully demonstrates how a static webpage can be transformed into an interactive frontend application.

The implementation provides practical experience with the complete frontend interaction cycle:

```text
USER
 │
 ▼
INTERACTION
 │
 ▼
EVENT HANDLER
 │
 ▼
JAVASCRIPT LOGIC
 │
 ▼
DOM MANIPULATION
 │
 ▼
UI UPDATE
 │
 ▼
USER FEEDBACK
```

### Key Outcomes

* Developed an interactive task management interface
* Implemented dynamic task creation
* Implemented task deletion
* Implemented workflow-based task organization
* Implemented task count updates
* Implemented modal interactions
* Implemented theme switching
* Implemented responsive UI behavior
* Practiced event-driven JavaScript
* Applied reusable CSS variables
* Improved understanding of frontend architecture

---

# 19. Current Limitations

The current version is primarily a frontend implementation.

Some advanced capabilities are not included yet:

* No persistent database
* No user authentication
* No cloud synchronization
* No multi-user collaboration
* No server-side task management
* No advanced analytics
* No real-time synchronization

Tasks may therefore depend on the current client-side implementation unless persistence is added.

---

# 20. Future Scope

Planora can be extended into a complete productivity platform.

### Task Management

* Edit existing tasks
* Task priorities
* Due dates
* Labels
* Categories
* Subtasks
* Recurring tasks

### Productivity

* Search
* Filters
* Sorting
* Progress analytics
* Productivity dashboard
* Calendar integration
* Notifications

### Backend

A future full-stack version could introduce:

```text
Frontend
   │
   ▼
REST API
   │
   ▼
Backend Server
   │
   ▼
Database
```

### Collaboration

Future versions could support:

* User accounts
* Shared boards
* Team workspaces
* Role-based access
* Real-time collaboration
* Activity history

---

# 21. Scalability Roadmap

The project can gradually evolve from a simple frontend application into a scalable productivity platform.

```text
                    PLANORA
                       │
                       ▼
              Frontend Application
                       │
                       ▼
                  REST API
                       │
              ┌────────┴────────┐
              ▼                 ▼
          Backend           Authentication
              │
              ▼
           Database
              │
              ▼
      Cloud Infrastructure
```

A possible technology evolution could be:

```text
HTML
CSS
JavaScript
    ↓
Frontend Framework
    ↓
Backend API
    ↓
Database
    ↓
Authentication
    ↓
Cloud Deployment
```

---

# 22. Learning Outcomes

Building Planora provides practical exposure to several important software development concepts.

### Frontend Development

* Semantic HTML
* Modern CSS
* Responsive layouts
* Component styling
* CSS variables

### JavaScript

* Variables and functions
* Event listeners
* DOM manipulation
* Dynamic elements
* Event-driven programming
* Application state

### UI Engineering

* Modal systems
* Interactive buttons
* Task cards
* Theme systems
* Responsive interfaces
* Visual feedback

### Software Engineering

* Project organization
* Separation of concerns
* Incremental development
* Maintainable styling
* Documentation
* Feature planning

---

# 23. Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/planora.git
```

Navigate into the project:

```bash
cd planora
```

Open the project using a development server.

For example, with VS Code:

```text
Open with Live Server
```

No backend installation is required for the current frontend version.

---

# 24. Quick Start

```text
1. Clone repository
        ↓
2. Open project
        ↓
3. Start local development server
        ↓
4. Open browser
        ↓
5. Create a task
        ↓
6. Move task through workflow
        ↓
7. Track progress
```

---

# 25. Project Status

**Current Version:** `1.0.0`

**Status:** Active Development

The current version focuses on the core Kanban experience, responsive interface, task management, and theme functionality.

Future releases can expand the application toward persistent storage, authentication, collaboration, and full-stack architecture.

---

# 26. Conclusion

Planora demonstrates how a relatively simple productivity concept can be implemented as a structured and interactive web application.

The project goes beyond creating a static Kanban layout by introducing dynamic task creation, workflow organization, task deletion, count tracking, theme switching, responsive design, and user interaction.

The central idea is simple:

> **Tasks should move with the work, not remain trapped in a static list.**

By representing work visually through the Kanban methodology, Planora provides a straightforward way to understand the current state of tasks and maintain focus on active work.

The project also serves as a foundation for future development into a larger productivity platform with persistent storage, authentication, collaboration, analytics, and cloud-based synchronization.

---

# 27. Author

**Dhruv Dhayal**

Frontend Developer | JavaScript | Web Development

---

# 28. License

This project is developed for educational and personal development purposes.

---

## Planora

**Plan. Organize. Track. Complete.**

```text
              TO DO
                │
                ▼
          IN PROGRESS
                │
                ▼
              DONE
```

**A simple workflow for turning tasks into progress.**
