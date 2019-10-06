import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';
import cls from '../utlis/cls';

import './Header.sass';

const b = cls('m-header');

export default function MHeader(props: {}) {
  return (
      <Container text={true} className={b()}>
          <Header
            as='h1'
            content='МИКРОСХЕМКА'
            inverted={true}
          />
      </Container>
  );
}
