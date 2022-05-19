import { MyPlugin as MyPluginDll, icons } from '../src';
import AccordionUI from '../src/accordionui';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 MyPlugin DLL', () => {
	it( 'exports MyPlugin', () => {
		expect( MyPluginDll ).to.equal( AccordionUI );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );
