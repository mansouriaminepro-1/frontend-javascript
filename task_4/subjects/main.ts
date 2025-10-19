/// <reference path="./subject.ts" />
/// <reference path="./cpp.ts"/>
/// <reference path="./Java.ts"/>
/// <reference path="./React.ts"/>
/// <reference path="./Teacher.ts"/>

namespace Subjects {
    export const cTeacher : Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
    }

    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();

    console.log("C++");
    cpp.setTeacher(cTeacher);
    console.log(cpp.getAvailableTeacher());
    console.log(cpp.getRequirements());

    console.log("Java");
    java.setTeacher(cTeacher);
    console.log(java.getAvailableTeacher());
    console.log(java.getRequirement());

    console.log("React");
    react.setTeacher(cTeacher);
    console.log(react.getAvailableTeacher());
    console.log(react.getRequirements());

}