// task_3/js/React.ts

/// <reference path="./Teacher.ts" />
/// <reference path="./subject.ts" />

namespace Subjects {
  // 1. Declaration merging: add experienceTeachingReact to Teacher
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // 2. React class extending Subject
  export class React extends Subjects {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      // Access the teacher from the parent Subject class
      const teacher = (this as any).teacher as Teacher | undefined;

      if (teacher && teacher.experienceTeachingReact && teacher.experienceTeachingReact > 0) {
        //return `Available Teacher: ${teacher.firstName}`;
        return "this.teacher.experienceTeachingReact", "this.teacher.firstName";
      } else {
        return "No available teacher";
      }
    }
  }
}
