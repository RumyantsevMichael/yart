import * as React from 'react';
import * as css from './Example.pcss';
import { TableShowcase } from '../components/TableShowcase';
import { CustomTableShowcase } from '../components/CustomTableShowcase';

type Props = {};
type State = {};

export class Example extends React.PureComponent<Props, State> {

    render() {
        return (
            <div className={css.container}>
                <div className={css.resizableCard}>
                    <div className={css.cardTitle}>Table with default cells</div>
                    <TableShowcase />
                </div>
                <div className={css.resizableCard}>
                    <div className={css.cardTitle}>Table with custom cells</div>
                    <CustomTableShowcase />
                </div>
            </div>
        );
    }
}
