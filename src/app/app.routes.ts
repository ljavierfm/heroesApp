import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './components/heroes/heroe.component';

const routes: Routes = [
    { path: 'heroes', component: HeroeComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch:'full',redirectTo:'heroes' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
