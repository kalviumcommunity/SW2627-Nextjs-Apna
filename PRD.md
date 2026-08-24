PRODUCT REQUIREMENTS DOCUMENT
Apna — Real-Time Job Application Tracker
Essential MVP • Version 1.0
Product Web Application Users Candidate + Employer
Core focus Real-time status tracking Secondary Employer bulk updates

1. Problem
Candidates apply to multiple jobs but often do not know whether an employer has seen their application or what
happened afterward. Employers may receive hundreds of applications and need a faster way to process them.
Opportunity: Give candidates clear, real-time visibility while giving employers efficient application management and
bulk actions.

2. Product Goal
• Create an application immediately after a successful job application with status Pending.
• Allow employers to update application status.
• Show status changes to candidates without a page refresh.
• Allow employers to update multiple applications in one action.
• Keep a simple status history for transparency.

3. Users
Candidate Employer / Recruiter
Find and apply for jobs Post and manage jobs
Track application status View, filter and review applicants
Receive real-time updates Update one or many applications
View application history Review candidate profiles

4. MVP Features
Candidate:
• Login / signup
• Job search with basic filters
• Job details
• Apply to job
• My Applications tracker
• Application details + timeline
• Real-time notifications
Employer:
• Dashboard with basic counts
• Create and manage jobs
• Applications table with search/filter

Apna — Real-Time Job Application Tracker PRD • 2
• Candidate profile
• Single status update
• Bulk status update

5. Application Status
Status Meaning
Pending Application submitted; not viewed yet
Viewed Employer has opened/reviewed the application
Shortlisted Candidate moved to the next stage
Rejected Employer rejected the application
MVP focus: Pending → Viewed → Rejected. Shortlisted can be included if time permits.

6. Core User Flow
Candidate: Login → Find Job → View Job → Apply → Pending → Employer action → Live status update.
Employer: Login → Applications → Search/Filter → Select candidates → Bulk Update → Database update →
Candidate notification.

7. Real-Time Requirement
When an employer changes an application status, the candidate should see the new status without manually
refreshing.
Employer action System Candidate sees
View Pending → Viewed Viewed + notification
Reject Viewed → Rejected Rejected + notification
Bulk reject Multiple records updated All affected applications update
Implementation can use WebSockets / Socket.IO or an equivalent real-time mechanism.

8. Essential Data Model
User: id, name, email, role
Job: id, employerId, title, description, location, salary, skills, status
Application: id, candidateId, jobId, employerId, currentStatus, appliedAt, updatedAt
StatusHistory: applicationId, previousStatus, newStatus, changedBy, changedAt
Notification: userId, applicationId, type, message, isRead, createdAt

9. Key APIs
Candidate: GET /jobs • GET /jobs/:id • POST /jobs/:id/apply • GET /applications • GET /applications/:id
Employer: POST /jobs • GET /employer/applications • PATCH /applications/:id/status • PATCH
/applications/bulk-status
Notifications: GET /notifications • PATCH /notifications/:id/read
10. Acceptance Criteria

• Candidate can log in and apply to a job.
• New application is immediately visible as Pending.

Apna — Real-Time Job Application Tracker PRD • 3
• Employer can see and update applications.
• Employer can select multiple applications and bulk-update them.
• Candidate sees status changes without refreshing.
• Candidate receives a notification for important status changes.
• Every status change is stored with timestamp and actor.

11. Team Plan
Workstream Responsibility
Candidate UI Jobs, job details, apply, tracker, notifications
Employer UI Dashboard, applications, filters, bulk actions
Backend Auth, jobs, applications, APIs, database
Real-Time Socket events, status history, notifications, integration

12. Definition of Done
Apply → Pending → Employer Views → Viewed → Employer selects multiple → Reject → Candidate gets
real-time update → Status history saved.
This is the core demo flow and should work reliably before adding advanced features.