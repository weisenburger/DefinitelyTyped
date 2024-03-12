/// <reference path="./common.d.ts" />

declare namespace M {
    class Autocomplete extends Component<AutocompleteOptions> implements Openable {
        /**
         * Get Instance.
         */
        static getInstance(elem: Element): Autocomplete;

        /**
         * Init autocomplete.
         */
        static init(els: Element, options?: Partial<AutocompleteOptions>): Autocomplete;

        /**
         * Init autocompletes.
         */
        static init(els: MElements, options?: Partial<AutocompleteOptions>): Autocomplete[];

        /**
         * Show autocomplete.
         */
        open(): void;

        /**
         * Hide autocomplete.
         */
        close(): void;

        /**
         * Select a specific autocomplete options.
         * @param el Element of the autocomplete option.
         */
        selectOption(el: string): void;

        /**
         * Update autocomplete options data.
         * @param data Autocomplete options data object.
         */
        updateData(data: AutocompleteData): void;

        /**
         * If the autocomplete is open.
         */
        isOpen: boolean;

        /**
         * Number of matching autocomplete options.
         */
        count: number;

        /**
         * Index of the current selected option.
         */
        activeIndex: number;

        /**
         * Instance of the dropdown plugin for this autocomplete.
         */
        dropdown: Dropdown;

        /**
         *  Set possible dropdown Menu items
         */
        setMenuItems(data: Array<AutocompleteData>): void;

        /**
         * Menu items.
         */
        menuItems: Array<AutocompleteData>;

        /**
         * resets the autocomplete instance.
         */
        _resetAutocomplete(): void;

        /**
         * creates and attaches the dropdown elements.
         */
        _renderDropdown(): void;
    }

    interface AutocompleteData {
        [key: string]: string | null;
    }

    interface AutocompleteOptions {
        /**
         * Data object defining autocomplete options with
         * optional icon strings.
         */
        data: Array<AutocompleteData>;

        /**
         * Limit of results the autocomplete shows.
         * @default infinity
         */
        limit: number;

        /**
         * Callback for when autocompleted.
         */
        onAutocomplete: (this: Autocomplete, text: string) => void;

        /**
         * Minimum number of characters before autocomplete starts.
         * @default 1
         */
        minLength: number;

        /**
         * Sort function that defines the order of the list
         * of autocomplete options.
         */
        sortFunction: (a: string, b: string, inputText: string) => number;

        /**
         * If true will render the key from each item directly as HTML.
         * User input MUST be properly sanitized first.
         * @default false
         */
        allowUnsafeHTML: boolean;

        /**
         * Pass options object to select dropdown initialization.
         * @default {}
         */
        dropdownOptions: Partial<DropdownOptions>;
    }
}

interface JQuery {
    // Pick<T,K> to check methods exist.
    autocomplete(method: keyof Pick<M.Autocomplete, "open" | "close" | "destroy">): JQuery;
    autocomplete(method: keyof Pick<M.Autocomplete, "selectOption">, el: Element): JQuery;
    autocomplete(method: keyof Pick<M.Autocomplete, "updateData">, data: M.AutocompleteData): JQuery;
    autocomplete(options?: Partial<M.AutocompleteOptions>): JQuery;
}
