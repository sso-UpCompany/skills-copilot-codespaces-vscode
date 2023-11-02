function skillsMember(){
    const member = {
        name: 'John',
        age: 27,
        skills: ['JavaScript', 'CSS', 'HTML'],
        salary: 2000,
        married: false,
        sayHello: function(){
            console.log('Hello World ', this.name);
        },
        sayAge: function(){
            console.log('My age is ', this.age);
        },
        saySkills: function(){
            console.log('My skills are ', this.skills);
        },

    }

    
    return member;
}