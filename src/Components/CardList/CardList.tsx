import Card from '../Card/Card'

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card name="Racoon" price={100} description="This is a cool racoon!" img="https://www.thebiggreenk.com/wp-content/uploads/2024/06/shutterstock_1008277312-e1585927638827.jpg"/>
        <Card name="Squirrel" price={50} description="This is a cool squirrel!" img="https://i.guim.co.uk/img/media/4b94502a42e3cbbd3176ef0b86d0cd493cf2cc5b/0_57_4800_2882/master/4800.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c97c045d4354f0506226cc3b6668dced"/>
        <Card name="Parrot" price={250} description="This is a cool parrot!" img="https://www.kaytee.com/-/media/Project/OneWeb/Kaytee/US/learn-care/ask-the-pet-bird-experts/ways-to-show-parrot-love/PARROT-png.jpg"/>
    </div>
  )
}

export default CardList