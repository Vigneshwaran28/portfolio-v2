import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  data: TreeNode[] = [];
  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        label: 'Skills',
        type: 'category',
        icon: PrimeIcons.PLUS,
        styleClass: 'SkillS1',
        expanded: true,
        data: { name: 'Acquired Skills' },
        children: [
          {
            label: 'Programming Languages',
            type: 'category',
            styleClass: 'SecondaryBox',
            expanded: true,
            data: { name: 'Languages' },
            children: [
              {
                label: 'Python',
                type: 'skill',
                styleClass: 'python',
                expanded: true,
                children: [
                  {
                    label: 'Libraries',
                    type: 'skill',
                    expanded: true,
                    styleClass: 'p-skill',
                    children: [
                      {
                        label: 'Numpy',
                        styleClass: 'p-skill',
                        expanded: true,
                        children: [
                          {
                            label: 'Pandas',
                            expanded: true,
                            styleClass: 'p-skill',
                            children: [
                              {
                                label: 'Matplotlib',
                                expanded: true,
                                styleClass: 'p-skill',
                                children: []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    label: 'Framework',
                    type: 'skill',
                    expanded: true,
                    styleClass: 'p-skill',
                    children: [
                      {
                        label: 'Django',
                        styleClass: 'p-skill'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Core Java',
                type: 'skill',
                styleClass: 'p-skill'
              }
            ]
          },
          {
            label: 'Web Development',
            type: 'category',
            styleClass: 'SecondaryBox',
            expanded: true,
            data: { name: 'Frontend Technologies' },
            children: [
              {
                label: 'HTML',
                styleClass: 'p-skill',
                expanded: true,
                children: [
                  {
                    label: 'CSS',
                    styleClass: 'p-skill',
                    expanded: true,
                    children: [
                      {
                        label: 'JavaScript',
                        styleClass: 'p-skill'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Frameworks',
                styleClass: 'p-skill',
                type: 'skill',
                expanded: true,
                children: [
                  {
                    label: 'Angular',
                    styleClass: 'p-skill',
                    expanded: true,
                    children: [
                      {
                        label: 'PrimeNG',
                        styleClass: 'p-skill',
                        expanded: true,
                        children: [
                          {
                            label: 'Bootstrap',
                            styleClass: 'p-skill',
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            label: 'Database',
            type: 'category',
            styleClass: 'SecondaryBox',
            expanded: true,
            data: { name: 'Backend Technologies' },
            children: [
              {
                label: 'MySQL',
                styleClass: 'p-skill'
              }
            ]
          },
          {
            label: 'Software Tools',
            type: 'category',
            styleClass: 'SecondaryBox',
            expanded: true,
            children: [
              {
                label: 'GitHub',
                styleClass: 'p-skill',
                expanded: true,
                children: [
                  {
                    label: 'Linux OS',
                    styleClass: 'p-skill',
                    expanded: true,
                    children: [
                      {
                        label: 'Canva',
                        styleClass: 'p-skill',
                        expanded: true,
                        children: [
                          {
                            label: 'Postman',
                            styleClass: 'p-skill',
                            expanded: true,
                            children: [
                              {
                                label: 'VS-code',
                                styleClass: 'p-skill'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }

}
