import { Router, RouterModule } from '@angular/router';
import { ArchivesComponent } from './archives.component';
import { HomeComponent } from './home.component';
import { TestComponent} from './test.component';

export const routing = RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'archives/:year/:month', component: ArchivesComponent},
    {path: 'test', component: TestComponent}
    //{path: '**', redirectTo: //
]);