function TodoApp(con){
    this.appContainer = con;
    this.addBtn = con.find('.row div .todoContainer_addList');
    this.removeBtn = con.find('.row div .todoContainer_removeList');
    this.clearBtn = con.find('.row div .todoContainer_clearList');
    this.tasksCont = con.find('.row .todoContainer_tasksContainer');
    // this.tasksArr = [];
    this.id = 1;

    this.addBtn.click(() => this.addTask());
    this.removeBtn.click(() => this.removeTask());
    this.clearBtn.click(() => this.clearTask());
}

TodoApp.prototype.showTasks = function(){
    // this.tasksCont.html('');
    // $.each(this.tasksArr,(index,task) => {
    //     this.tasksCont.append(task.content);
    // });
    // this.removeSelectTask();
}

TodoApp.prototype.newIdName = function(){
    // const elem = this.tasksCont.find('p');
    // // elem.each(function(index,data){
    // //     $(this).attr('data-id',"cos");
    // //     console.log($(this).attr('data-id'));
    // // });

    // $.each(this.tasksArr,function(index){
    //     $(this)[0].id = index;
    //     elem.eq(index).attr('data-id',`${index}`);

    //     // console.log(elem.eq(index).attr('data-id'));
    // })
    
    // this.showTasks();
}

TodoApp.prototype.addTask = function(){
    this.tasksCont.find('p').each(function(index,data){
        let number = Number($(this).attr('data-id'));
        app.id = Math.max(number) + 1;
        
    })

    const task = `<p class="d-flex" data-id='${this.id}'><span class="mr-auto p-2">Task Number ${this.id}</span><button class="btn btn-danger p-2">X</button></p>`;
    this.id++;
    this.tasksCont.append(task);
    this.removeSelectTask();
}

TodoApp.prototype.removeTask = function(){
    this.tasksCont.find('p').last().remove();
    this.removeSelectTask();
}

TodoApp.prototype.clearTask = function(){
    let length = this.tasksCont.find('p').length;
    this.id = 1;
    this.tasksCont.html('');
}

TodoApp.prototype.removeSelectTask = function(){
    const rmBtn = this.tasksCont.find('p');
    rmBtn.each(function(index,data){
        $(this).find('button').click(function(event){
            const attr = Number($(event.currentTarget.parentElement).attr('data-id'));
            $(event.currentTarget.parentElement).remove();
            app.newIdName();
        })
    })
}

const app = new TodoApp($('.todoContainer'));