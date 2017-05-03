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
    }    

    public class Tasks
    {
        public string Description { get; set; }
        public double TimeToComplete { get; set; }
    }
}