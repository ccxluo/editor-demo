import { Component } from '@angular/core';
import Editor from '@toast-ui/editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-editor';
  ngOnInit() {
    setTimeout(() => {
      const editor = new Editor({
        el: document.querySelector('#editor'),
        initialEditType: 'markdown',
        height: '500px'
      });
  
      editor.getHtml();
    }, 0)
  }
}
