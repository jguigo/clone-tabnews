function status(request, response) {
  response.status(200).send({ msg: "alô! é hora de malhar!!!!!" });
}

export default status;
