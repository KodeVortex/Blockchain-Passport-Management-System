/*
DATE: 04/12/2023
LAST MODIFIED BY: @@Kishore
*/

//Create card for giving id for searching a passport.
import React from 'react'

export default function Verify() {
  return (
    <div>
          <div class="container" style="margin: 0px;">
      <form action="" method="post">
        <section class="vh-40">
          <div class="container py-2 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card shadow-2-strong" style="border-radius: 1rem;">
                  <div class="card-body ps-5 pe-5 pt-5 text-center">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-dark-50 mb-2">Please enter your login and password!</p>
                    <div class="form-outline mb-3">
                      <input type="text" name="username" id="typeEmailX-2" class="form-control form-control-lg" />
                      <label class="form-label" for="typeEmailX-2">Username</label>
                    </div>
                    <div class="form-outline mb-3">
                      <input type="password" name="password" id="typePasswordX-2" class="form-control form-control-lg" />
                      <label class="form-label" for="typePasswordX-2">Password</label>
                    </div>
                    <div class="form-check d-flex justify-content-start mb-3">
                      <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                      <label class="form-check-label" for="form1Example3"> Remember password </label>
                    </div>
                    <div class="mb-2">
                      <button class="btn btn-primary btn-lg btn-block mb-4" type="submit">Login</button>
                    </div>
                    <div class="mx-md-4 d-flex align-items-center justify-content-center ">
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <a href="member_register.php">
                        <button type="button" class="btn btn-outline-danger">Create new</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
    </div>
  )
}
