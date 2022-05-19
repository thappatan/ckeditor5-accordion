import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';

import accordionIcon from '../theme/icons/accordion.svg';

// accordion
export default class AccordionUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add('accordion', (locale) => {
			const command = editor.commands.get('insertAccordion');
			const view = new ButtonView(locale);

			view.set({
				label: t('Accordion'),
				icon: accordionIcon,
				tooltip: true,
			});

			view.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

			this.listenTo(view, 'execute', () => {
				editor.execute('insertAccordion');
			});

			return view;
		});
	}
}
