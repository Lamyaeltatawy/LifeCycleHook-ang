import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name?: string;
  @ViewChild('name', { static: true })
  nameRef!: ElementRef<HTMLParagraphElement>;
  constructor() {
    // console.log('from constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // console.log('from ngOnChanges');
  }
  ngOnInit(): void {
    console.log('from ngOnInit');
    console.log(this.nameRef?.nativeElement);
  }
  ngDoCheck(): void {
    // console.log('from ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('from ngAfterContentInit');
    console.log(this.nameRef?.nativeElement);
  }
  ngAfterContentChecked(): void {
    // console.log('from ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('from ngAfterViewInit');
    console.log(this.nameRef?.nativeElement);
  }
  ngAfterViewChecked(): void {
    // console.log('from ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    // console.log('from ngOnDestroy');
  }
}
