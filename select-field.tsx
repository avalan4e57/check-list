import * as React from 'react';

export interface SelectFieldConcern {
    about: 'selected-option';
    activeOption: string;
}

export interface SelectFieldProps {
    options: string[];
    when: (concern: SelectFieldConcern) => void;
}

export class SelectField extends React.Component<SelectFieldProps> {
    private whenSelected: React.ChangeEventHandler<HTMLSelectElement> = e => {
        const { when } = this.props;
        const choosenOption = e.currentTarget.value;
        when({ about: 'selected-option', activeOption: choosenOption });
    }
    render() {
        const { options } = this.props;
        return <>
            <select onChange={this.whenSelected}>
                {
                    options.map(option => {
                        return <option key={option} value={option}>{option}</option>;
                    })
                }
            </select>
        </>;
    }
}
