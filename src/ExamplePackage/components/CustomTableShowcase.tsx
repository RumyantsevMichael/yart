import * as React from 'react';
import { Column, PinnedPlacement, Table } from '../../GridTablePackage';
import { CustomTableHeadCell } from './CustomTableHeadCell';
import { CustomTableCell } from './CustomTableCell';
import { ContentAligment } from '../types/ContentAligment';
import * as css from './CustomTableShowcase.pcss';

type TableData = {
    name: string;
    country: string;
    age: string;
    hasDog: boolean;
};

type Props = {};

type State = {
    tableData: TableData[];
};

export class CustomTableShowcase extends React.PureComponent<Props, State> {
    readonly state: State = {
        tableData: [
            {
                name: 'John',
                country: 'USA',
                age: '32',
                hasDog: true,
            },
            {
                name: 'Michael',
                country: 'Australia',
                age: '24',
                hasDog: true,
            },
            {
                name: 'Sophie',
                country: 'France',
                age: '24',
                hasDog: true,
            },
        ],
    };

    render() {
        return (
            <div className={css.tableWrapper}>
                <Table<TableData>
                    data={this.state.tableData}
                    rowKeys={this.state.tableData.map((item, index) => index)}
                >
                    <Column<TableData, 'name'>
                        name={'Name'}
                        field={'name'}
                        minWidth={'100px'}
                        renderHead={(props) => (
                            <CustomTableHeadCell>{props.name}</CustomTableHeadCell>
                        )}
                        renderCell={(props) => (
                            <CustomTableCell
                                background={'#EEEEEE'}
                            >
                                <input type="text" value={props.value}/>
                            </CustomTableCell>
                        )}
                        pinned={PinnedPlacement.left}
                    />

                    <Column
                        name={'Age'}
                        field={'age'}
                        width={'80px'}
                        renderHead={(props) => (
                            <CustomTableHeadCell
                                align={ContentAligment.center}
                            >
                                {props.name}
                            </CustomTableHeadCell>
                        )}
                        renderCell={(props) => (
                            <CustomTableCell
                                align={ContentAligment.center}
                            >
                                {props.value}
                            </CustomTableCell>
                        )}
                    />

                    <Column<TableData, 'country'>
                        name={'Country'}
                        field={'country'}
                        minWidth={'100px'}
                        renderHead={(props) => (
                            <CustomTableHeadCell>{props.name}</CustomTableHeadCell>
                        )}
                        renderCell={(props) => (
                            <CustomTableCell>
                                <select value={props.value}>
                                    <option>USA</option>
                                    <option>France</option>
                                    <option>Australia</option>
                                </select>
                            </CustomTableCell>
                        )}
                    />

                    <Column<TableData, 'hasDog'>
                        name={'Has Dog'}
                        field={'hasDog'}
                        maxWidth={'100px'}
                        renderHead={(props) => (
                            <CustomTableHeadCell
                                align={ContentAligment.center}
                            >
                                {props.name}
                            </CustomTableHeadCell>
                        )}
                        renderCell={(props) => (
                            <CustomTableCell
                                align={ContentAligment.center}
                                background={'#EEEEEE'}
                            >
                                <input type={'checkbox'} checked={props.value}/>
                            </CustomTableCell>
                        )}
                        pinned={PinnedPlacement.right}
                    />
                </Table>
            </div>
        );
    }
}
