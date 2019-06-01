import * as React from 'react';
import { Column, PinnedPlacement, Table } from '../../GridTablePackage';

type TableData = {
    name: string;
    country: string;
    age: string;
    phone: string;
    address: string;
    job: string;
};

type Props = {};

type State = {
    tableData: TableData[];
};

export class TableShowcase extends React.PureComponent<Props, State> {
    readonly state: State = {
        tableData: [
            {
                name: 'John',
                country: 'USA',
                age: '32',
                phone: '+1(345)345-456-45',
                address: '1562 Fulton St Brooklyn, NY 11213',
                job: 'Teacher',
            },
            {
                name: 'Michael',
                country: 'Australia',
                age: '32',
                phone: '+61(45)222-56-12',
                address: '200 Castlereagh Street Sydney NSW 2000 GPO Box 4288',
                job: 'Engineer',
            },
            {
                name: 'Sophie',
                country: 'France',
                age: '32',
                phone: '+33(122)780-12-12',
                address: '43 Rue de Miromesnil, 75008 Paris',
                job: 'Designer',
            },
        ],
    };

    render() {
        return (
            <Table<TableData>
                rowHeight={30}
                data={this.state.tableData}
                rowKeys={[0, 1, 2]}
            >
                <Column
                    name={'Name'}
                    field={'name'}
                    pinned={PinnedPlacement.left}
                />

                <Column name={'Age'} field={'age'} />

                <Column name={'Phone Number'} field={'phone'} />

                <Column name={'Address'} field={'address'} />

                <Column
                    name={'Job'}
                    field={'job'}
                    pinned={PinnedPlacement.right}
                />
            </Table>
        );
    }
}
