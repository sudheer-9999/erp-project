
# erp-project

### ER Diagram (visual / box view)

```text
┌──────────┐                 ┌───────────┐
│ Teacher  │                 │  Subject  │
├──────────┤                 ├───────────┤
│ id (PK)  │                 │ id (PK)   │
│ name     │                 │ name      │
│ email    │                 └───────────┘
└──────────┘                        ▲
      ▲                             │
      │                             │
      │                 ┌─────────────────────┐
      │                 │   TeacherSubject    │
      │                 ├─────────────────────┤
      │                 │ teacherId (PK, FK)  │───┐
      │                 │ subjectId (PK, FK)  │   │
      │                 └─────────────────────┘   │
      │                                           │
      │                                           │
      │                                           │
      │                                           │
┌─────────────────┐                               │
│ TeacherAttendance│                              │
├─────────────────┤                               │
│ id (PK)         │                               │
│ teacherId (FK)  │◄──────────────────────────────┘
│ date            │
│ status          │  (Present / Absent / Leave)
└─────────────────┘


┌──────────────┐
│ ClassSection │
├──────────────┤
│ id (PK)      │
│ className    │   e.g. "10"
│ section      │   e.g. "A"
└──────────────┘
        ▲
        │ 1
        │
        │   many
┌──────────────────────────────┐
│        ClassSchedule         │
├──────────────────────────────┤
│ id (PK)                      │
│ classSectionId (FK) ─────────┘
│ subjectId (FK)  ─────────────► Subject
│ teacherId (FK)  ─────────────► Teacher (primary)
│ substituteTeacherId (FK, ?)──► Teacher (substitute)
│ date                          │
│ startTime                     │
│ endTime                       │
│ status                        │ (Scheduled / Cancelled / SubstituteAssigned)
└──────────────────────────────┘
```

### Relationships summary

- **Teacher – TeacherSubject – Subject**
  - One `Teacher` can be linked to many `Subject`s through `TeacherSubject`.
  - One `Subject` can be linked to many `Teacher`s through `TeacherSubject`.
- **Teacher – TeacherAttendance**
  - One `Teacher` has many `TeacherAttendance` rows (one per day).
- **ClassSection – ClassSchedule**
  - One `ClassSection` has many `ClassSchedule` entries (one per period/time slot).
- **Subject – ClassSchedule**
  - One `Subject` has many `ClassSchedule` entries across different classes.
- **Teacher – ClassSchedule**
  - **One-to-many** (as `teacher`): one `Teacher` can be the main teacher for many `ClassSchedule` rows.
  - **One-to-many** (as `substituteTeacher`): one `Teacher` can be the substitute teacher for many `ClassSchedule` rows.

