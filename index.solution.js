```javascript
// pages/index.solution.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/about'>Go to About</Link>
    </div>
  );
}
```