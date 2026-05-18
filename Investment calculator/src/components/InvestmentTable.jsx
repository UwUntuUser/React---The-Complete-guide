export default function InvestmentTable({ tableContent, ...props }) {
  console.log("TEST", tableContent);

  return (
    <table {...props}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Investment</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableContent.map((row) => {
          return (
            <tr>
              <td>{row.year}</td>
              <td>{row.investmentValueTable}</td>
              <td>{row.interestYear}</td>
              <td>{row.totalInterest}</td>
              <td>{row.investedCapital}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
