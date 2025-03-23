import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lehesten_2012_x14.JPG/525px-Lehesten_2012_x14.JPG",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Castelli.JPG/1920px-Castelli.JPG",
    address: "Some address 15, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context){
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

//export async function getStaticProps(){
//  return {
//    props:{
//      meetups: DUMMY_MEETUPS
//    },
//    revalidate: 1
//  }
//}

export default HomePage;
