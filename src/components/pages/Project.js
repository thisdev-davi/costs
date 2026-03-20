import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Projet() {
  const { id } = useParams();
  const [project, setProject] = useState();
  return <div></div>;
}

export default Projet;
