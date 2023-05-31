import * as React from "react";

const Customers = () => {
  const [customers, setCustomers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  async function fetchCustomers() {
    setLoading(true);
    await fetch("http://localhost:8055/items/customers")
      .then(response => response.json())
      .then(result => {if(result) setCustomers(result), setLoading(false);});
  }

  React.useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <>
      <p>{loading? 'loading data....' : JSON.stringify(customers)}</p>
    </>
  );
};

export default Customers;
