

package org.sid.ressource;


/**  @Author Salmi Ismail**/

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.sid.entity.Expense;
import org.sid.repo.ExpenseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api")
public class ExpenseController {
	
	@Autowired
	private ExpenseRepo expenseRepository;
	
	@GetMapping("/expenses")
	public List<Expense> getExpenses(){
		return expenseRepository.findAll();
	}

	@DeleteMapping("/expenses/{id}")
	public ResponseEntity<?>  deleteExpense(@PathVariable Long id){
		expenseRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
	@PostMapping("/expenses")
	public ResponseEntity<Expense> createExpense(@Valid @RequestBody Expense expense) throws URISyntaxException{
		Expense result= expenseRepository.save(expense);
		return ResponseEntity.created(new URI("/api/expenses" + result.getId())).body(result);
	}
}

