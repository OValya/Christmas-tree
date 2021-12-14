import Control from '../common/control';
import Page from './page';

import CheckForm from '../components/checkbox-form';
import CheckList from '../components/checkbox-list';
import FilterBlock from '../components/filter-block';
import {ToysData} from '../dataModel';
import toysDataUrl from '../toys-data.json'
import Card from '../components/card'
import CardBox from '../components/card-box'

const forms = ['ball', 'bell', 'toy', 'snowflake', 'cone'];
const color = ['white', 'red', 'blue', 'yellow', 'green'];
const size = ['big', 'medium', 'small'];
const favorite = ['favorite'];

export default class ToysPage extends Page {
  formFilter: CheckList;
  colorFilter: CheckList;
  sizeFilter: CheckList;
  favoriteFilter: CheckList;
  filterByValue: FilterBlock;
  constructor(parentNode: HTMLElement, ) {
    super(parentNode);
    this.formFilter = new CheckList(document.body, 'Форма:', 'form', forms);
    this.colorFilter = new CheckList(document.body, 'Цвет:', 'color', color);
    this.sizeFilter = new CheckList(document.body, 'Размер:', 'size', size);
    this.favoriteFilter = new CheckList(document.body, 'Только любимые:', 'favorite', favorite);

    let arrayOfFilter: Array<CheckList> = [this.formFilter, this.colorFilter, this.sizeFilter, this.favoriteFilter];
    this.filterByValue = new FilterBlock(this.node, 'Фильтр по значению', arrayOfFilter)

    const data = new ToysData();
    data.build().then(result => {
      new CardBox(this.node, result.data)
    });

  }
}