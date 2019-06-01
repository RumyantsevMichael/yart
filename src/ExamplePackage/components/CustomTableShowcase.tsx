import autobind from 'autobind-decorator';
import * as React from 'react';

import { Column, PinnedPlacement, Table } from '../../GridTablePackage';
import { ContentAlignment } from '../types/ContentAlignment';
import { CustomTableHeadCell } from './CustomTableHeadCell';
import { CustomTableCell } from './CustomTableCell';
import { getRandomArrayItem } from '../common/getRandomArrayItem';
import { countries } from '../common/countries';
import { names } from '../common/names';
import { getRandomNumberInRange } from '../common/getRandomNumberInRange';
import { sequence } from '../common/sequence';

import * as css from './CustomTableShowcase.pcss';

type TableData = {
    id: number;
    name: string;
    country: string;
    age: number;
    hasDog: boolean;
};

type Props = {};

type State = {
    tableData: TableData[];
    rowKeys: TableData['id'][];
};

export class CustomTableShowcase extends React.PureComponent<Props, State> {
    readonly state: State;

    constructor(props: Props) {
        super(props);

        const tableData = Array.from(sequence(0, 100)).map(index => ({
            id: index,
            name: getRandomArrayItem(names),
            country: getRandomArrayItem(countries),
            age: getRandomNumberInRange(18, 81),
            hasDog: Math.random() > 0.5,
        }));
        const rows = tableData.map(item => item.id);

        this.state = {
            tableData: tableData,
            rowKeys: rows,
        };
    }

    render() {
        return (
            <div className={css.tableWrapper}>
                <Table<TableData>
                    maxHeight={300}
                    rowHeight={50}
                    data={this.state.tableData}
                    rowKeys={this.state.rowKeys}
                >
                    <Column
                        name={'Id'}
                        field={'id'}
                        pinned={PinnedPlacement.left}
                        renderHead={props => (
                            <CustomTableHeadCell>
                                {props.name}
                            </CustomTableHeadCell>
                        )}
                        renderCell={props => (
                            <CustomTableCell>{props.value}</CustomTableCell>
                        )}
                    />

                    <Column<TableData, 'name'>
                        name={'Name'}
                        field={'name'}
                        minWidth={'100px'}
                        renderHead={props => (
                            <CustomTableHeadCell>
                                <div>{props.name}</div>
                                <br />
                                <input onChange={this.filterByName} />
                            </CustomTableHeadCell>
                        )}
                        renderCell={props => (
                            <CustomTableCell>
                                <input type="text" defaultValue={props.value} />
                            </CustomTableCell>
                        )}
                    />

                    <Column
                        name={'Age'}
                        field={'age'}
                        width={'80px'}
                        renderHead={props => (
                            <CustomTableHeadCell
                                align={ContentAlignment.center}
                            >
                                {props.name}
                            </CustomTableHeadCell>
                        )}
                        renderCell={props => (
                            <CustomTableCell align={ContentAlignment.center}>
                                {props.value}
                            </CustomTableCell>
                        )}
                    />

                    <Column<TableData, 'country'>
                        name={'Country'}
                        field={'country'}
                        minWidth={'100px'}
                        renderHead={props => (
                            <CustomTableHeadCell>
                                {props.name}
                            </CustomTableHeadCell>
                        )}
                        renderCell={props => (
                            <CustomTableCell>
                                <select defaultValue={props.value}>
                                    {countries.map(country => (
                                        <option>{country}</option>
                                    ))}
                                </select>
                            </CustomTableCell>
                        )}
                    />

                    <Column<TableData, 'hasDog'>
                        name={'Has Dog'}
                        field={'hasDog'}
                        maxWidth={'100px'}
                        renderHead={props => (
                            <CustomTableHeadCell
                                align={ContentAlignment.center}
                            >
                                {props.name}
                            </CustomTableHeadCell>
                        )}
                        renderCell={props => (
                            <CustomTableCell align={ContentAlignment.center}>
                                <input
                                    type={'checkbox'}
                                    defaultChecked={props.value}
                                />
                            </CustomTableCell>
                        )}
                        pinned={PinnedPlacement.right}
                    />
                </Table>
            </div>
        );
    }

    @autobind
    private filterByName(event: React.ChangeEvent<HTMLInputElement>): void {
        const value = event.currentTarget.value;
        const searchString = value.trim().toLowerCase();
        const rows = this.state.tableData
            .filter(datum => datum.name.toLowerCase().includes(searchString))
            .map(datum => datum.id);

        this.setState({
            rowKeys: rows,
        });
    }
}
