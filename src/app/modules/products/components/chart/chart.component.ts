import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';

import { IStatsCategories } from '../../../../models/entities/StatsCategories.entity';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, AfterViewInit {
  @Input() statsCategories: IStatsCategories[] | undefined;
  @ViewChild('stats') canvas: ElementRef<HTMLCanvasElement> | undefined;

  constructor() {
    this.statsCategories = undefined;
    this.canvas = undefined;
    Chart.register(...registerables);
  }

  ngOnInit(): void {}

  private _generateRandomColor(): string {
    const o = Math.round;
    const r = Math.random;
    const s = 255;

    return `rgba(${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)}, ${r().toFixed(
      1
    )})`;
  }

  ngAfterViewInit(): void {
    if (this.statsCategories && this.canvas) {
      const context = this.canvas.nativeElement.getContext('2d')!;
      const chart = new Chart(context, {
        type: 'polarArea',
        data: {
          labels: this.statsCategories.map(
            (statCategory) => statCategory.category
          ),
          datasets: [
            {
              label: '# of Products',
              data: [
                ...this.statsCategories.map(
                  (statCategory) => statCategory.numberOfProducts
                ),
              ],
              borderWidth: 1,
              backgroundColor: this.statsCategories.map((statCategory) =>
                this._generateRandomColor()
              ),
              borderColor: this.statsCategories.map((statCategory) =>
                this._generateRandomColor()
              ),
            },
          ],
        },
        options: {
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    }
  }
}
