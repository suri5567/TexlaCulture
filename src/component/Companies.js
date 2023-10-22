// import React from "react";
// import img from "../Images/compnay profile.png";
// import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';


// const Companies = () => {
// 	let companyDetails = [
// 		{
// 			name: "TexlaCulture",
// 			subtitle: "INV-17048",
// 			onboarding: "12 Jan 2022",
// 			go_live: "07 Aug 2022",
// 			total: 244,
// 			billing_date: "07 Aug 2022",
// 			status: "Actice",
// 		},
// 		{
// 			name: "TexlaCulture",
// 			subtitle: "INV-17049",
// 			onboarding: "11 Feb 2022",
// 			go_live: "06 May 2022",
// 			total: 1000,
// 			billing_date: "07 Aug 2022",
// 			status: "Actice",
// 		},
// 		{
// 			name: "TexlaCulture",
// 			subtitle: "INV-13042",
// 			onboarding: "10 Sep 2022",
// 			go_live: "07 Aug 2022",
// 			total: 150,
// 			billing_date: "207 Aug 2022",
// 			status: "Draft",
// 		},
// 	];
// 	return (
// 		<div className="company">
// 			<Paper>
// 				<Table className="custom-table">
// 					<TableHead>
// 						<TableRow>
// 							<TableCell>Company Name</TableCell>
// 							<TableCell>Onboarding date</TableCell>
// 							<TableCell>Go-Live Date</TableCell>
// 							<TableCell>Total User</TableCell>
// 							<TableCell>Last Billing</TableCell>
// 							<TableCell>Status</TableCell>
// 						</TableRow>
// 					</TableHead>
// 					<TableBody>
// 						{companyDetails.map((c) => (
// 							<TableRow key={c.id}>
// 								<TableCell>
// 									<div style={{ display: 'flex', alignItems: 'center' }}>
// 										<img src={img} alt="Company_profile" style={{ maxWidth: '50px', maxHeight: '50px', marginRight: '10px' }} />
// 										<div>
// 											<p>{c.name}</p>
// 											<span style={{marginLeft:"36px"}}>{c.subtitle}</span>
// 										</div>
// 									</div>
// 								</TableCell>
// 								<TableCell>{c.onboarding}</TableCell>
// 								<TableCell>{c.go_live}</TableCell>
// 								<TableCell>{c.total}</TableCell>
// 								<TableCell>{c.billing_date}</TableCell>
// 								<TableCell>{c.status}</TableCell>
// 							</TableRow>
// 						))}
// 					</TableBody>
// 				</Table>
// 			</Paper>
// 		</div>
// 	);
// };

// export default Companies;


import React from "react";
import img from "../Images/compnay profile.png";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const Companies = () => {
  let companyDetails = [
    {
      name: "TexlaCulture",
      subtitle: "INV-17048",
      onboarding: "12 Jan 2022",
      go_live: "07 Aug 2022",
      total: 244,
      billing_date: "07 Aug 2022",
      status: "Active",
    },
    {
      name: "TexlaCulture",
      subtitle: "INV-17049",
      onboarding: "11 Feb 2022",
      go_live: "06 May 2022",
      total: 1000,
      billing_date: "07 Aug 2022",
      status: "Active",
    },
    {
      name: "TexlaCulture",
      subtitle: "INV-13042",
      onboarding: "10 Sep 2022",
      go_live: "07 Aug 2022",
      total: 150,
      billing_date: "07 Aug 2022",
      status: "Draft",
    },
  ];

  return (
    <div className="company">
      <Paper>
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Onboarding date</TableCell>
              <TableCell>Go-Live Date</TableCell>
              <TableCell>Total User</TableCell>
              <TableCell>Last Billing</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companyDetails.map((c) => (
              <TableRow key={c.subtitle}>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={img} alt="Company_profile" style={{ maxWidth: '50px', maxHeight: '50px', marginRight: '10px' }} />
                    <div>
                      <p>{c.name}</p>
                      <span style={{marginLeft:"38px"}}>{c.subtitle}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{c.onboarding}</TableCell>
                <TableCell>{c.go_live}</TableCell>
                <TableCell>{c.total}</TableCell>
                <TableCell>{c.billing_date}</TableCell>
                <TableCell>{c.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Companies;
