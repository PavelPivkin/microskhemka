import * as React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='https://avatars2.githubusercontent.com/u/11777931?s=460&v=4' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Павел</Card.Header>
      <Card.Meta>
      <div>Для связи используйте мессенджеры, 
       звонки с незнакомых телефонов автоматически попадают в черный список</div>
       <div>Whatsapp | Telegram | SMS</div>
      </Card.Meta>
      <Card.Description>
         8-915-412-44-67
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>
        Фронтенд разработчик в Яндекс.Технологиях
      </p>
      <p>
        Учитель технологии в МАОУ СОШ №3
      </p>
    </Card.Content>
  </Card>
)

export default CardExampleCard