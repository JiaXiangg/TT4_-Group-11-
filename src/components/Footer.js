import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	document.getElementById('root').style.minHeight = '100vh';
	return (
		<footer
			class='footer mt-auto py-3 bg-light'
			style={{ position: 'sticky', top: '100%' }}
		>
			<div class='container p-4'>
				<div class='row'>
					<div class='col-lg-6 col-md-12 mb-4 mb-md-0'>
						<h5 class='text-uppercase'>Awards</h5>

						<p>
							Best Bank in the World 2020, Global Finance World's Best Bank
							2019, Euromoney Global Bank of the Year 2018, The Banker Best Bank
							in the World 2018, Global Finance.
						</p>
					</div>

					<div class='col-lg-3 col-md-6 mb-4 mb-md-0'>
						<h5 class='text-uppercase mb-0'>Links</h5>

						<ul class='list-unstyled'>
							<li>
								<Link to='/aboutus' className='text-dark'>
									About Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

// <!-- Footer -->
// <footer class="bg-light text-center text-lg-start">
//   <!-- Grid container -->
//   <div class="container p-4">
//     <!--Grid row-->
//     <div class="row">
//       <!--Grid column-->
//       <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
//         <h5 class="text-uppercase">Footer Content</h5>

//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
//           molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
//           voluptatem veniam, est atque cumque eum delectus sint!
//         </p>
//       </div>
//       <!--Grid column-->

//       <!--Grid column-->
//       <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
//         <h5 class="text-uppercase">Links</h5>

//         <ul class="list-unstyled mb-0">
//           <li>
//             <a href="#!" class="text-dark">Link 1</a>
//           </li>
//           <li>
//             <a href="#!" class="text-dark">Link 2</a>
//           </li>
//           <li>
//             <a href="#!" class="text-dark">Link 3</a>
//           </li>
//           <li>
//             <a href="#!" class="text-dark">Link 4</a>
//           </li>
//         </ul>
//       </div>
//       <!--Grid column-->

//       <!--Grid column-->
//       <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
//         <h5 class="text-uppercase mb-0">Links</h5>

//         <ul class="list-unstyled">
//           <li>
//             <a href="#!" class="text-dark">Link 1</a>
//           </li>
//           <li>
//             <a href="#!" class="text-dark">Link 2</a>
//           </li>
//           <li>
//             <a href="#!" class="text-dark">Link 3</a>
//           </li>
//           <li>
//             <a href="#!" class="text-dark">Link 4</a>
//           </li>
//         </ul>
//       </div>
//       <!--Grid column-->
//     </div>
//     <!--Grid row-->
//   </div>
//   <!-- Grid container -->

export default Footer;
