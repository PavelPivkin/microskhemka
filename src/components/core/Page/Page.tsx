import * as React from 'react';
import MHeader from '../../Header/Header';
import { Container, Header, Segment, Divider } from 'semantic-ui-react';
import CardExampleCard from '../Card/Card'

import b from '../../utlis/cls';

import './Page.sass';

// @ts-ignore
const tableSrc = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS5TXgo0lD8-tsEIFWZ5QHg6-sd37GcSbFIbReMHaTDOyN45ok6RKn-0cqSmbzVwCbAVmCsu-2g7IUE/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false&chrome=false';
const cls = b('m-page');

export class Page extends React.Component<{}> {

    public render() {
        return (
            <Container>
                <MHeader/>
                <Header
                    as='h2'
                    content='Расписание занятий по субботам:'
                    inverted={true}
                />
                <div className={cls('table-wrapper', {})}>
                    <iframe className={cls('table', {})} src={tableSrc} />
                </div>
                <Header
                    as='h2'
                    content='Контакты:'
                    inverted={true}
                />
                <CardExampleCard />
                <Divider/>
            </Container>
        );
    }
}
