import { Component, inject, input, computed, signal, OnInit, DestroyRef } from '@angular/core';
import { type Task } from './task.model';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { ActivatedRoute, ResolveFn, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent //implements OnInit
{
  userId = input.required<string>();
  userTasks = input.required<Task[]>();
  //order = input<'asc' | 'desc'>();

  order = signal<'asc' | 'desc'> ('desc');

  //private taskService = inject(TasksService);
  //route = inject(ActivatedRoute);
  //destroyRef = inject(DestroyRef);

  

  /*userTasks = computed(()=> this.taskService.allTasks()
  .filter(task => task.userId=== this.userId())
  .sort((a,b) => {
    if(this.order ()==='desc'){
      return a.dueDate > b.dueDate ? -1 : 1;
    }else{
      return a.dueDate > b.dueDate ? 1 : -1;
    }
  })
  );
  */
  

  /*ngOnInit(): void {
    const subcription = this.route.queryParams.subscribe(
     {
      next: (params) => this.order.set(params['order'])
     }
    );
    
    this.destroyRef.onDestroy(() => subcription.unsubscribe());
  }*/
  

}

export const resolveUserTasks: ResolveFn<Task[]> = (route, router) =>{
  const order = route.queryParams['order'];
  const taskService = inject(TasksService);
  const userId = route.paramMap.get('userId');

  console.log(order, userId);
  const tasks =  taskService.allTasks()
  .filter(task => task.userId=== userId)
  .sort((a,b) => {
    if(order==='desc'){
      return a.dueDate > b.dueDate ? -1 : 1;
    }else{
      return a.dueDate > b.dueDate ? 1 : -1;
    }
  });

  return tasks.length ? tasks: [];
};
