import ClientDemo from './ClientDemo';

// If async is added to the function, it is forcly a server component.
export default async function RSCDemo() {
  console.log('RSCDemo rendered');
  return (
    <div className="rsc">
      <h2>A React Server Component</h2>
      <p>
        Will <strong>ONLY</strong> be rendered on the server or at build time.
      </p>
      <p>
        <strong>NEVER</strong> on the client-side!
      </p>
      {/* Below works, because client components can be rendered inside server components.
       But not the other way around. */}
      <ClientDemo />
    </div>
  );
}