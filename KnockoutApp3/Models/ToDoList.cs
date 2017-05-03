using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KnockoutApp3.Models
{
    public class ToDoList
    {
        public List<Tasks> GetTasks()
        {
            var ToDo = new List<Tasks>();
            return ToDo;
        }

        public static void CreateToDoTask()
        {
            var db = new ToDodbEntities();
            var newTodo = new ToDo();

            newTodo.TaskName = "something To Do Test";
            newTodo.TimeToComplete = 20;
            newTodo.Completed = false;

            db.ToDos.Add(newTodo);
            db.SaveChanges();
        }

    }

    public class Tasks
    {
        public string TaskName { get; set; }
        public double TimeToComplete { get; set; }
        public bool Completed { get; set; }
    }

    
}