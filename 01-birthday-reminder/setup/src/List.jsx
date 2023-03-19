import Person from './Person';
const List = ({ personas }) => {
  return (
    <section>
      {personas.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
