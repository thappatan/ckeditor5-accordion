import AccordionEditing from './accordionediting';
import AccordionUI from './accordionui';

import { Plugin } from 'ckeditor5/src/core';


export default class Accordion extends Plugin {
  static get requires() {
	return [ AccordionEditing, AccordionUI ];
  }
}
