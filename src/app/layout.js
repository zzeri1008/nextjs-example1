import './globals.css'
import Link from "next/link";

export const metadata = {
  title: 'Web tutorials',
  description: 'Generated by zzeri',
}

// 서버 컴포넌트 방식
export default async function RootLayout({ children }) {
  const resp = await fetch('http://localhost:9999/topics');
  const topics = await resp.json();

  return (
      <html>
      <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        {topics.map((topic)=>{
          return <li key={topic.id}> <Link href={`/read/${topic.id}`}>{topic.title}</Link> </li>
        })}
      </ol>
      {children}
      <ul>
        <li><a href="/create">Create</a></li>
        <li><a href="/update/1">Update</a></li>
        <li><input type="button" value="delete"/></li>
      </ul>
      </body>
      </html>
  )
}

/*
클라이언트 컴포넌트 방식

export default function RootLayout({ children }) {
  const [topics, setTopics] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:9999/topics')
        .then(resp => resp.json())
        .then(result => {
            setTopics(result);
        });
  });
  return (
    <html>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          {topics.map((topic)=>{
            return <li key={topic.id}> <Link href={`/read/${topic.id}`}>{topic.title}</Link> </li>
          })}
        </ol>
        {children}
        <ul>
          <li><a href="/create">Create</a></li>
          <li><a href="/update/1">Update</a></li>
          <li><input type="button" value="delete"/></li>
        </ul>
      </body>
    </html>
  )
}
*/