import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { IService, ISkill } from './type'

import { BsCircleFill } from 'react-icons/bs'

export const services: IService[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'handle database, server, api using <b>Express </b> & other popular frameworks',
   },
   {
      Icon: AiOutlineApi,
      title: 'API Development',
      about:
         'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
   },
   {
      Icon: MdDeveloperMode,
      title: 'Competitive Coder',
      about:
         'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
   },
   {
      Icon: AiOutlineAntDesign,
      title: 'UI/UX designer',
      about:
         'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
   },
   {
      Icon: RiComputerLine,
      title: 'Whatever',
      about:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
   },
]

export const languages: ISkill[] = [
   {
      Icon: BsCircleFill,
      name: 'Python',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'Django',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'ReactJs',
      level: '55',
   },
   {
      Icon: BsCircleFill,
      name: 'React Native',
      level: '50',
   },
   {
      Icon: BsCircleFill,
      name: 'Bootstrap',
      level: '30',
   },
   {
      Icon: BsCircleFill,
      name: 'MySQL',
      level: '30',
   },
]

export const tools: ISkill[] = [
   {
      Icon: BsCircleFill,
      name: 'Communication',
      level: '95',
   },
   {
      Icon: BsCircleFill,
      name: 'Teamwork',
      level: '85',
   },
   {
      Icon: BsCircleFill,
      name: 'Problem Solving',
      level: '85',
   },
]