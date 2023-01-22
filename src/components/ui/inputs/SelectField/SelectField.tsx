import Select, { components, DropdownIndicatorProps, GroupBase, Props } from 'react-select';
import { Icon } from '@/components/ui/Icon';
import classNames from 'classnames';

function DropdownIndicator<
	Option = unknown,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(props: DropdownIndicatorProps<Option, IsMulti, Group>) {
	return (
		<components.DropdownIndicator {...props}>
			<Icon name="other_triangle-down" />
		</components.DropdownIndicator>
	);
}

export function SelectField<
	Option = unknown,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>) {
	const cl = classNames(`${props.selectSize || 'lg'} custom-select-field ${props.className}`);
	const clPrefix = classNames(`${props.selectSize || 'lg'} custom-select-field`);

	return (
		<Select
			components={{ DropdownIndicator }}
			{...props}
			isSearchable={false}
			className={cl}
			classNamePrefix={clPrefix}
		/>
	);
}
