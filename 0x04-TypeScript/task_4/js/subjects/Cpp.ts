namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subjects {
      getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
  
    getAvailableTeacher(): string {
      // Access the teacher from the parent Subject class
      const teacher = (this as any).teacher as Teacher | undefined;

      if (teacher && teacher.experienceTeachingC && teacher.experienceTeachingC > 0) {
        return "Available Teacher: ${this.teacher.firstName}";
      } else {
        return "No available teacher";
      }

    }
}
}
