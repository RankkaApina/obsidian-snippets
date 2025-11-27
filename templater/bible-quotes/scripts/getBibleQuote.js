module.exports = async function getBibleQuote(tp, reference, version="NRSVUE") {
  // Build the command for your Python script
  let cmd = `wsl zsh -ic 'python "$PYCODE/bible-fetch.py" "${reference}" --version ${version}'`;

  // Run Python
  let quote = await tp.user.sh(cmd);
  return quote.out;
}