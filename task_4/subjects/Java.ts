/// <reference path="./Teacher.ts" />
/// <reference path="./subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    export class Java extends Subjects {
        getRequirement(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {

         const teacher = (this as any).teacher as Teacher | undefined;

        if(teacher&& teacher.experienceTeachingJava&& teacher.experienceTeachingJava>0)
        {
        return "Available Teacher: ${Teacher.firstname}";
        }
        else
        {
            return "No available teacher";
        }
    } 
    }
}
    
